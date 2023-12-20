import "./about.css";

export default function about() {
  return (
    <>
      <div id="about" className="d-flex ">
        <div id="aboutimg">
          <div>
            <img
              id="aboutusimg"
              src="https://media.istockphoto.com/vectors/about-us-rgb-color-icon-vector-id1256096552?k=20&m=1256096552&s=612x612&w=0&h=kA-OfVVMSmx6OeXvmAI2vflO4S15yVHQRTP2_yY-KVI="
              alt="notfound"
            />
          </div>
          <img
            id="iti"
            src="https://iti.gov.eg/assets/images/iti-logo.png"
            alt="notfound"
          />
        </div>

        <div id="abouttext">
          <h2 id="abouttitle">About Us</h2>
          <p id="aboutdesc">
            This site was designed by Mohamed El-Bahrawy
            <br /> under the supervision of Eng\Mahmoud Mekky in the React
            Native summer training course for 2022.
          </p>
          <h3 id="contact">Contact us</h3>
          <div id="social">
            <a href="https://www.facebook.com/Mb47l">
              <button className="facebook">Facebook</button>
            </a>
            <a href="https://twitter.com/Medo_elbahrawy">
              <button className="twitter">Twitter</button>
            </a>
            <a href="https://www.linkedin.com/in/m-el-bahrawy/">
              <button className="linkedin">LinkedIn</button>
            </a>
            <a href="https://github.com/mohamedelbahrawy512">
              <button className="github">Github</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
