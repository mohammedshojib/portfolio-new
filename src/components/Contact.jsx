import React from "react";

const Contact = () => {
  return (
    <div class="hero min-h-screen w-4/5 mx-auto">
      <div class="hero-content flex-col lg:flex-row">
        <div className="w-full lg:w-6/12">
          <h1 class="text-5xl font-bold"> CONTACT</h1>
          <p className="py-6">
            I am interested in working with any company that thinks my skill
            will be helpful for them. If you are looking for someone like me,
            please let me know. Or you can just 'say hi' to me.
          </p>
          <a
            href="mailto:asmdshojib11@gmail.com"
            class="btn btn-primary text-gray-200 mt-6"
          >
            Email
          </a>
        </div>
        <div className="w-full lg:w-6/12">
          <p class="py-6">Email: asmdshojib11@gmail.com</p>
          <p class="py-2">Phone: +88 01646052260</p>
          <p class="py-2">Adress: Nazir road feni sadar feni</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
