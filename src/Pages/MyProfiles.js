import React from "react";
import photo from "../assets/IMG_2215 S03.png";
import photo1 from '../assets/1.png';
import photo2 from '../assets/2.png';
import photo3 from '../assets/3.png';
const MyProfiles = () => {
  return (
    <div>
      <div className="w-full bg-[#EDF1F5] md:flex ">
        <div className="img flex  md:w-1/3 justify-end ">
          <img className="w-96" src={photo} alt="" />
        </div>

        <div className="text md:w-3/4 px-2 md:px-0 flex flex-col items-center justify-center ">
          <div>
            <h2 className="text-3xl my-2">
              Hello ! <br />
              <span className="text-[#C0392B]"> I Am Front End Developer</span>
            </h2>

            <h2 className="text-3xl my-2 font-bold">
              My Name Is <br />
              Sadek Hossain
            </h2>
            <div className="my-2">
              <div className="btn w-52">Contact Me</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap 4 my-12 px-5 lg:px-12">
          <div>
            <h2 className="text-3xl font-semibold text-center">About Me</h2>
            <div className="flex justify-center items-center">
              <div className="text-xl font-semibold mt-5">
                <p>Name: Sadek Hossain</p>
                <p>Email: shadeks16@gmail.com</p>
                <p>Education: Political Science (BSS)</p>
                <p>Phone: 01301-935337</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <h2 className="text-3xl font-semibold text-center">My Skill</h2>
              <div className="grid grid-cols-1 gap-3">
                <span className="block my-1 font-bold  ">HTML</span>
                <progress
                  className="progress progress-success w-56"
                  value="90"
                  max="100"
                ></progress>
                <span className="block progress-error my-1 font-bold  ">
                  CSS
                </span>
                <progress
                  className="progress progress-success w-56"
                  value="85"
                  max="100"
                ></progress>
                <span className="block  my-1 font-bold  ">JAVASCRIPT</span>
                <progress
                  className="progress progress-success w-56"
                  value="70"
                  max="100"
                ></progress>
                <span className="block  my-1 font-bold  ">React</span>
                <progress
                  className="progress progress-success w-56"
                  value="75"
                  max="100"
                ></progress>
                <span className="block  my-1 font-bold  ">Node</span>
                <progress
                  className="progress progress-success w-56"
                  value="60"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-center font-semibold mb-10">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-5 lg:px-12 mb-10">
          <div className="card max-w-lg bg-base-100 shadow-xl">
            <figure>
              <img className=""
                src={photo1}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                DentiCare
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Denticare is Dentist Website</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Doctor</div>
                <div className="badge badge-outline">Clinic</div>
              </div>
              <button className="btn btn-success"><a href="https://react-denticare.web.app/" target={'_blank'}>Visit Site</a></button>
            </div>
          </div>

          <div className="card max-w-lg bg-base-100 shadow-xl">
            <figure>
              <img className=""
                src={photo2}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Car Manager
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Car Manager is Warehouse Related Website</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Warehouse</div>
                <div className="badge badge-outline">FullStack</div>
              </div>
              <button className="btn btn-success"><a href="https://car-manager-client.web.app/" target={'_blank'}>Visit Site</a></button>
            </div>
          </div>

          <div className="card max-w-lg bg-base-100 shadow-xl">
            <figure>
              <img className=""
                src={photo3}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Monota Auto Parts
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Monota Auto Parts is Manufactur Related Website</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Manufactur</div>
                <div className="badge badge-outline">FullStack</div>
              </div>
              <button className="btn btn-success"><a href="https://monota-auto-parts.web.app/" target={'_blank'}>Visit Site</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfiles;
