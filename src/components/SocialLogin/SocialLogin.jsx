import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";



const SocialLogin = () => {
  const { googleSingin } = UseAuth();

  const handleGoogleSingin = () => {
    googleSingin()
      .then(result => {
        console.log(result)
      })
      .catch(error => console.error(error))
  }


  return (
    <div>
      <button onClick={handleGoogleSingin} className="btn">
        <FaGoogle></FaGoogle>
        GOOGLE
      </button>
    </div>
  );
};

export default SocialLogin;