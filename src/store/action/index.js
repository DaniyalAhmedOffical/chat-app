import Firebase from "../../config/firebase";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
// import firebase from "firebase"


// const set_data = (data) => {
//   return (dispatch) => {
//     dispatch({
//       type: "SET DATA",
//       data: data,
//     });
//     dispatch({ type: "SETCHAT", payload: { name: "Daniyal Ahmed" } });
//   };
// };

const facebook_login = () => {
  console.log("facebook login");
  return (dispatch) => {
    const provider = new  Firebase.auth.FacebookAuthProvider();
    Firebase.auth()
      .signInWithPopup(provider)
      // signInWithPopup(auth, provider)
      .then(function(result)  {
        // The signed-in user info.
        // const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        var user = result.user;
        // ...
        let create_user = {
          name: user.displayName,
          email: user.email,
          profile: user.photoURL,
          uid : user.uid 
        }
        
                console.log("user==>", create_user)
      })

      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
};

export { facebook_login };
