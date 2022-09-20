import React from "react";
import Client1 from "../../assets/images/clients/client1.jpg";
import Client2 from "../../assets/images/clients/client2.jpg";
import Client3 from "../../assets/images/clients/client3.jpg";
import Client4 from "../../assets/images/clients/client4.jpg";
import Client5 from "../../assets/images/clients/client5.jpg";
import Client6 from "../../assets/images/clients/client6.jpg";

const Leader = () => {
  return (
    <div className="w-10/12 m-auto my-20">
      <div className="space-y-5">
        <p className="tracking-wider text-center">WHO WE ARE</p>
        <p className="text-3xl text-center">Leadership</p>
      </div>
      <div className="mt-14 flex flex-wrap gap-10 justify-center md:justify-between">
        <div>
          <img
            src={Client1}
            alt="leader"
            className="w-40 rounded-full m-auto mb-2"
          />
          <div>
            <p className="text-xl text-center">Lauri Sippola</p>
            <p className="font-light text-center">
              Chief Executive Officer (currently on paternity leave)
            </p>
          </div>
        </div>
        <div>
          <img
            src={Client2}
            alt="leader"
            className="w-40 rounded-full m-auto mb-2"
          />
          <div>
            <p className="text-xl text-center">Lauri Sippola</p>
            <p className="font-light text-center">
              Chief Executive Officer (currently on paternity leave)
            </p>
          </div>
        </div>
        <div>
          <img
            src={Client3}
            alt="leader"
            className="w-40 rounded-full m-auto mb-2"
          />
          <div>
            <p className="text-xl text-center">Lauri Sippola</p>
            <p className="font-light text-center">
              Chief Executive Officer (currently on paternity leave)
            </p>
          </div>
        </div>
        <div>
          <img
            src={Client4}
            alt="leader"
            className="w-40 rounded-full m-auto mb-2"
          />
          <div>
            <p className="text-xl text-center">Lauri Sippola</p>
            <p className="font-light text-center">
              Chief Executive Officer (currently on paternity leave)
            </p>
          </div>
        </div>
        <div>
          <img
            src={Client5}
            alt="leader"
            className="w-40 rounded-full m-auto mb-2"
          />
          <div>
            <p className="text-xl text-center">Lauri Sippola</p>
            <p className="font-light text-center">
              Chief Executive Officer (currently on paternity leave)
            </p>
          </div>
        </div>
        <div>
          <img
            src={Client6}
            alt="leader"
            className="w-40 rounded-full m-auto mb-2"
          />
          <div>
            <p className="text-xl text-center">Lauri Sippola</p>
            <p className="font-light text-center">
              Chief Executive Officer (currently on paternity leave)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leader;
