import {useRouteError} from "react-router-dom";
import { Header } from "./Header";
import Footer from "./Footer";

const Error = () =>{
      const err = useRouteError();
      console.log(err);
    return (
      <>
        <Header />
        <div className="error-page   h-[79vh]">
          <h1>Error Occured</h1>
          {/* <h2>{err.data}</h2>
        <h3>{err.status + "  : " + err.statusText }</h3> */}
          <img
            className="error-pic"
            src="https://cdn-icons-png.flaticon.com/512/755/755014.png"
            alt="error"
          />
        </div>
        <Footer />
      </>
    );
}

export default Error;


// const AppLayout = () => (
//   <>
//     <Header />
//     <Outlet />
//     {/* <Body /> */}
//     <Footer />
//   </>
// );