
import React, { useEffect } from 'react';

import TheHeader from '../containers/TheHeader';
import TheSidebar from '../containers/TheSidebar';
import TheFooter from '../containers/TheFooter';
import '../../../../node_modules/simple-line-icons/css/simple-line-icons.css';
import card from '../images/card.jpeg';

import Multiselect from 'multiselect-react-dropdown';



const ContentAndTools = () => {


  useEffect(() => {
    require('./../css/style.css');



  }, [])

  return (
    <div>
      <TheHeader />
      <div className="app-body">
        <TheSidebar />
        <div className="main">
          <main className="main">
            <br /><br />
            <div className="col-lg-12">
              <div className="card" style={{ alignContent: "center" }}>
                <div className="card-header">
                  Update tools
                </div>
                <div className="card-body">
                  <form action method="post" className="form-horizontal">
                    <div className="form-group row">
                      <div className="col-4">
                        <input type="text" className="form-control" placeholder="title" style={{ fontSize: "medium" }} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-4">
                        <input type="text" className="form-control" placeholder="status" style={{ fontSize: "medium" }} />
                      </div>
                      <div className="col-4">
                        <label className="switch switch-3d switch-primary">
                          <input type="checkbox" className="switch-input" checked="" />
                          <span className="switch-label"></span>
                          <span className="switch-handle"></span>
                        </label>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-4">
                        <input type="text" className="form-control" placeholder="Tool Type" style={{ fontSize: "medium" }} />
                      </div>
                      <div className="col-4">
                        <select className="form-control" style={{ height: "32px", fontSize: "medium" }}>
                          <option style={{ fontSize: "medium" }}>1</option>
                          <option style={{ fontSize: "medium" }}>2</option>
                          <option style={{ fontSize: "medium" }}>3</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-4">
                        <input type="text" className="form-control" placeholder="Audio/Video URL" style={{ fontSize: "medium" }} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-6">
                        <textarea name="textarea-input" rows="7" class="form-control" placeholder="Description" style={{ fontSize: "medium" }}></textarea>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-6">
                        <textarea name="textarea-input" rows="7" class="form-control" placeholder="Benifit" style={{ fontSize: "medium" }}></textarea>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-4">
                        <input type="text" className="form-control" placeholder="Duration(minutes)" style={{ fontSize: "medium" }} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-4">
                        <Multiselect
                          className="form-control"
                          isObject={false}
                          onRemove={function noRefCheck() { }}
                          onSelect={function noRefCheck() { }}
                          selectionLimit="5"
                          options={[
                            'Option 1',
                            'Option 2',
                            'Option 3',
                            'Option 4',
                            'Option 5'
                          ]}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-4">
                        <Multiselect
                          className="form-control"
                          isObject={false}
                          onRemove={function noRefCheck() { }}
                          onSelect={function noRefCheck() { }}
                          options={[
                            'Option 1',
                            'Option 2',
                            'Option 3',
                            'Option 4',
                            'Option 5'
                          ]}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-6">
                        <img src={card} alt="thumbnail" style={{ height: "328px", width: "487px" }} />
                      </div>
                      <div className="col-6">
                        <img src={card} alt="thumbnail" style={{ height: "328px", width: "487px" }} />
                      </div>

                    </div>
                    <div className="form-group row">
                      <div className="col-6">
                        <input type="file" className="form-control" style={{ fontSize: "medium" }} />
                      </div>

                      <div className="col-6">
                        <input type="file" className="form-control" style={{ fontSize: "medium" }} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-6">
                        <input type="date" className="form-control" placeholder="created at" style={{ fontSize: "medium" }} />
                      </div>

                      {/* <div className="form-group row"> */}
                      <div className="col-6">
                        <div class="col-md-9">
                          <label className="radio-inline" htmlFor="inline-radio1">
                            <input type="radio" id="inline-radio1" name="inline-radios" defaultValue="option1" /> Never
                          </label>
                          <label className="radio-inline" htmlFor="inline-radio2">
                            <input type="radio" id="inline-radio2" name="inline-radios" defaultValue="option2" /> Date
                          </label>
                          <label className="radio-inline" htmlFor="inline-radio3">
                            <input type="date" placeholder="date" />
                          </label>
                        </div>


                      </div>
                    </div>
                    {/* </div> */}
                    <div className="form-group row">
                      <div className="col-4">
                        <input type="text" className="form-control" placeholder="Modified By" style={{ fontSize: "medium" }} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-4">
                        <input type="text" className="form-control" placeholder="Last Modified Date" style={{ fontSize: "medium" }} />
                      </div>
                    </div>

                  </form>

                </div>
              </div>
            </div>



          </main>
        </div>
      </div>
      <TheFooter />

    </div>
  );
}
export default ContentAndTools;