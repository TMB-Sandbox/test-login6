import type { NextPage } from "next";
import { TextField, FormControlLabel, Checkbox, Button } from "@mui/material";

const LoginFormContainer: NextPage = () => {
  return (
    <div className="self-stretch box-border h-[522px] overflow-hidden shrink-0 flex flex-col p-2.5 items-start justify-center gap-[10px] text-center text-17xl text-dimgray font-inter border-[1px] border-solid border-gainsboro">
      <div className="self-stretch overflow-hidden flex flex-row p-2.5 items-end justify-center">
        <h1 className="m-0 flex-1 relative text-inherit font-normal font-inherit">
          Login
        </h1>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col p-2.5 items-start justify-center gap-[10px] text-right text-base text-cornflowerblue font-roboto">
        <div className="self-stretch bg-white overflow-hidden flex flex-col pt-[30px] pb-10 pr-[25px] pl-8 items-start justify-end gap-[27px]">
          <TextField
            className="[border:none] bg-[transparent] self-stretch"
            color="primary"
            variant="outlined"
            type="email"
            name="Email"
            id="Email"
            label="E-Mail"
            size="medium"
            margin="none"
            required
          />
          <TextField
            className="[border:none] bg-[transparent] self-stretch"
            color="primary"
            variant="outlined"
            type="text"
            name="Password"
            id="Password"
            label="Password"
            size="medium"
            margin="none"
            required
          />
        </div>
        <div className="self-stretch bg-white overflow-hidden flex flex-row py-0 pr-[29px] pl-[34px] items-center justify-between">
          <FormControlLabel
            label="Remember Me"
            labelPlacement="end"
            control={
              <Checkbox
                name="RememberMe"
                id="RememberMe"
                color="primary"
                size="medium"
              />
            }
            id="RememberMe"
          />
          <a
            className="[text-decoration:none] relative tracking-[0.15px] leading-[150%] text-[inherit] flex items-center w-[275px] h-[53px] shrink-0"
            href="www.google.com"
            target="_blank"
          >
            Forgot Password ?
          </a>
        </div>
      </div>
      <div className="self-stretch h-[81px] overflow-hidden shrink-0 flex flex-row p-2.5 box-border items-center justify-start">
        <Button
          className="flex-1"
          variant="contained"
          name="LoginButton"
          id="LoginButton"
          color="primary"
          href="www.uol.com.br"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginFormContainer;
