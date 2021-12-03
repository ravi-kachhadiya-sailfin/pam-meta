import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  AppBar as MuiAppBar,
  ClickAwayListener as MuiClickAwayListener,
  Grow as MuiGrow,
  IconButton as MuiIconButton,
  MenuList as MuiMenuList,
  Paper as MuiPaper,
  Tabs as MuiTabs,
} from "@material-ui/core";
import {
  Menu as MuiMenuIcon,
  ArrowDropDownOutlined as MuiArrowDropDownOutlinedIcon,
} from "@material-ui/icons";
import {
  NavbarTopDiv,
  NavbarTab,
  NavbarPopper,
  NavbarMenuItem,
} from "common/navbar/Navbar.styles";

export const Navbar = ({ menuItems, width, history, navbarConfig }) => {
  const [value, setValue] = useState(0);
  const [selectedSubMenu, setSelectedSubMenu] = useState("");
  const [mobileConfig, setMobileConfig] = useState({
    menuShow: window.innerWidth > width,
    mobileView: window.innerWidth <= width,
  });

  let inputRefs = [];

  function setRef(ref) {
    inputRefs.push(ref);
  }

  useEffect(() => {
    if (navbarConfig) {
      navbarConfig.route && history.push(navbarConfig.route);

      let index = menuItems.findIndex(
        (x) =>
          x.route ===
          navbarConfig.route.split("/").slice(0, 2).join("/").split("?")[0] ||
          x.menuItem.some(
            (el) =>
              el.route ===
              navbarConfig.route.split("/").slice(0, 3).join("/").split("?")[0]
          )
      );

      setValue(index);

      if (menuItems.length && index > 0) {
        let submenu = menuItems[index].menuItem.find(
          ({ route }) =>
            route ===
            navbarConfig.route.split("/").slice(0, 3).join("/").split("?")[0]
        );

        setSelectedSubMenu(submenu && index.toString() + submenu.name);
      }
    }

    function handleResize() {
      let val = window.outerWidth <= width;

      setMobileConfig({ menuShow: !val, mobileView: val });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [mobileConfig.mobileView, width, history, menuItems, navbarConfig]);

  function mobileMenuToggle() {
    setMobileConfig({ menuShow: !mobileConfig.menuShow, mobileView: true });
  }

  function handleClick(event, index) {
    inputRefs[index].callToggle(event);
  }

  return (
    <nav>
      <NavbarTopDiv
        isMobileView={mobileConfig.mobileView}
        size={menuItems.length}
      >
        <MuiAppBar position="static">
          <div className="container">
            <MuiIconButton
              color="inherit"
              aria-label="Menu"
              onClick={mobileMenuToggle}
              className={mobileConfig.mobileView ? "show" : "hide"}
            >
              <MuiMenuIcon fontSize="small" />
            </MuiIconButton>
            <MuiTabs
              value={value}
              orientation={mobileConfig.mobileView ? "vertical" : "horizontal"}
              className={mobileConfig.menuShow ? "show" : "hide"}
            >
              {menuItems &&
                menuItems.map((menu, index) => {
                  return (
                    <NavbarTab
                      key={index + "Tab"}
                      label={
                        <MenuListComposition
                          name={menu.name}
                          route={menu.route}
                          isMobileView={mobileConfig.mobileView}
                          setValue={setValue}
                          index={index}
                          ref={setRef}
                          setSelectedSubMenu={setSelectedSubMenu}
                          selectedSubMenu={selectedSubMenu}
                          history={history}
                        >
                          {menu.menuItem}
                        </MenuListComposition>
                      }
                      value={index}
                      name="Tab"
                      className="Mui-selected"
                      onClick={(e) => handleClick(e, index)}
                    />
                  );
                })}
            </MuiTabs>
          </div>
        </MuiAppBar>
      </NavbarTopDiv>
    </nav>
  );
};

const MenuListComposition = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState(null);
  const anchorRef = useRef(null);

  useImperativeHandle(ref, () => ({
    callToggle(e) {
      handleToggle(e, props.history);
    },
  }));

  // Event handler for clicking on an item in a dropdown menu
  function handleToggle(e, history) {
    setTarget(e.currentTarget);
    setOpen((prevState) => !prevState);

    if (!props.children.length) {
      props.setValue(props.index);
      props.setSelectedSubMenu(null);

      if (props.route) {
        history.push(props.route);
      }
    }
  }

  // Event handler for clicking on navbar item without a menu
  function handleClose(event, action, item, history) {
    if (action) {
      props.setValue(props.index);
      props.setSelectedSubMenu(props.index.toString() + event.target.innerText);
    } else {
      setOpen(false);
    }

    if (item && item.route) {
      history.push(item.route);
    }
  }

  function handleListKeyDown(event) {
    if (event.key === "Tab" || event.key === "Enter") {
      event.preventDefault();
      setOpen(false);

      if (target) {
        target.focus();
      }
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <div ref={anchorRef} aria-haspopup="true" className="arrowIcon">
        {props.name}
        {props.children.length > 0 && <MuiArrowDropDownOutlinedIcon />}
      </div>
      {props.children.length > 0 && (
        <NavbarPopper
          open={open}
          anchorEl={anchorRef.current}
          transition
          role={undefined}
          disablePortal={props.isMobileView}
          mobile={props.isMobileView ? 1 : 0}
          placement="bottom-start"
        >
          {({ TransitionProps, placement }) => (
            <MuiGrow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <MuiPaper>
                <MuiClickAwayListener onClickAway={handleClose}>
                  <MuiMenuList
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {props.children.length > 0 &&
                      props.children.map((item, index) => {
                        return (
                          <NavbarMenuItem
                            key={"menuItem" + index}
                            onClick={(e) =>
                              handleClose(e, true, item, props.history)
                            }
                            submenu={
                              props.index.toString() + item.name ===
                                props.selectedSubMenu
                                ? 1
                                : 0
                            }
                            mobile={props.isMobileView ? 1 : 0}
                          >
                            {item.name}
                          </NavbarMenuItem>
                        );
                      })}
                  </MuiMenuList>
                </MuiClickAwayListener>
              </MuiPaper>
            </MuiGrow>
          )}
        </NavbarPopper>
      )}
    </div>
  );
});

MenuListComposition.displayName = "MenuListComposition";
