import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      className={useStyles.button}
      onClick={() => loginWithRedirect()}
    >
      SI!
    </Button>
  );
};
