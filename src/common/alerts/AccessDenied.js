import {
  Alert as MuiAlert,
  AlertTitle as MuiAlertTitle,
} from "@material-ui/lab";
import { useTranslation } from "react-i18next";

export const AccessDenied = ({ supportEmail }) => {
  const { t } = useTranslation();

  return (
    <MuiAlert severity="error">
      <MuiAlertTitle>{t("common:accessDenied.title")}</MuiAlertTitle>
      {t("common:accessDenied.message", { supportEmail })}
      <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
    </MuiAlert>
  );
};
