import FacebookLogin from "react-facebook-login";
export default function FaceBook() {
  const responseFacebook = (data) => {
    // Handle the login response here
    console.log(data);
  };

  return (
    <FacebookLogin
      appId="3515130975388967"
      // autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
      textButton="Login with Facebook"
    />
  );
}
