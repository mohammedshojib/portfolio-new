import React from "react";

const Skills = () => {
  return (
    <div className="m-auto w-4/5">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      {/* <div className="w-16 px-4 rounded p-2 bg-primary font-bold mb-4">Web</div> */}
      <div className="grid gap-5 grid-cols-1 m-auto lg:grid-cols-2">
        <div class="card w-90 bg-gray-700 text-primary-content">
          <div class="card-body">
            <div class=" text-base flex justify-end font-bold text-white dark:text-white">
              <p style={{ width: "95%" }}>ReactJS</p>
              <p className="text-right bg-primary py-1 px-2 rounded-lg">75%</p>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                class="bg-primary h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
        <div class="card w-90 bg-gray-700 text-primary-content">
          <div class="card-body">
            <div class=" text-base flex justify-end font-bold text-white dark:text-white">
              <p style={{ width: "95%" }}>NodeJS</p>
              <p className="text-right bg-primary py-1 px-2 rounded-lg">77%</p>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                class="bg-primary h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: "77%" }}
              ></div>
            </div>
          </div>
        </div>
        <div class="card w-90 bg-gray-700 text-primary-content">
          <div class="card-body">
            <div class=" text-base flex justify-end font-bold text-white dark:text-white">
              <p style={{ width: "95%" }}>Express JS</p>
              <p className="text-right bg-primary py-1 px-2 rounded-lg">73%</p>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                class="bg-primary h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: "73%" }}
              ></div>
            </div>
          </div>
        </div>
        <div class="card w-90 bg-gray-700 text-primary-content">
          <div class="card-body">
            <div class=" text-base flex justify-end font-bold text-white dark:text-white">
              <p style={{ width: "95%" }}>MongoDB</p>
              <p className="text-right bg-primary py-1 px-2 rounded-lg">85%</p>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                class="bg-primary h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
        </div>
        <div class="card w-90 bg-gray-700 text-primary-content">
          <div class="card-body">
            <div class=" text-base flex justify-end font-bold text-white dark:text-white">
              <p style={{ width: "95%" }}>Tailwind CSS</p>
              <p className="text-right bg-primary py-1 px-2 rounded-lg">79%</p>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                class="bg-primary h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: "79%" }}
              ></div>
            </div>
          </div>
        </div>
        <div class="card w-90 bg-gray-700 text-primary-content">
          <div class="card-body">
            <div class=" text-base flex justify-end font-bold text-white dark:text-white">
              <p style={{ width: "95%" }}>Boostrap</p>
              <p className="text-right bg-primary py-1 px-2 rounded-lg">85%</p>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                class="bg-primary h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
        </div>
        <div class="card w-90 bg-gray-700 text-primary-content">
          <div class="card-body">
            <div class=" text-base flex justify-end font-bold text-white dark:text-white">
              <p style={{ width: "95%" }}>Redux (Learning)</p>
              <p className="text-right bg-primary py-1 px-2 rounded-lg">15%</p>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                class="bg-primary h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: "15%" }}
              ></div>
            </div>
          </div>
        </div>
        <div class="card w-90 bg-gray-700 text-primary-content">
          <div class="card-body">
            <div class=" text-base flex justify-end font-bold text-white dark:text-white">
              <p style={{ width: "95%" }}>NextJS & Gatsby</p>
              <p className="text-right bg-primary py-1 px-2 rounded-lg">15%</p>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                class="bg-primary h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: "15%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
