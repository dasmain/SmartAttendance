import React, { useState, useEffect } from "react";

import ParentNavbar from "../../components/navbars/parent_navbar";
import { useNavigate } from "react-router";
import ParentDetailsManager from "../../models/parent/auth/http/get_parent_details";

function ParentDashboard() {
  const [showLoading, setShowLoading] = useState(false);
  const [toastMessages, setToastMessages] = useState([]); // Set initial toastMessages from location state
  const parentDetailsManager = new ParentDetailsManager();
  const [parentData, setParentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setShowLoading(true);
      try {
        const response = await parentDetailsManager.get();
        if (response.success) {
          setParentData(response.data);
        } else {
          setToastMessages([
            ...toastMessages,
            {
              type: "invalid",
              title: "Error",
              body: response.message,
            },
          ]);
        }
      } catch (error) {
        setToastMessages([
          ...toastMessages,
          {
            type: "invalid",
            title: "Error",
            body: error.message,
          },
        ]);
      } finally {
        setShowLoading(false);
      }
    };

    fetchData();
  }, []);
  const AttendanceData = [
    {
      courseTitle: "SDD",
      teacherName: "Ali",
      presentHrs: "20",
      absentHrs: "2",
      totalHrs: "48",
    },
    {
      courseTitle: "DSA",
      teacherName: "IBU",
      presentHrs: "25",
      absentHrs: "7",
      totalHrs: "48",
    },
  ];
  const data = parentData
  ? [
      {
        Name: parentData.name,
        Email: parentData.email,
        ContactNo: parentData.contactno,
        StdName: parentData.studentID.name,
        StdEmail: parentData.studentID.email,
        // isStudentAdvisor: studentData.isStudentAdvisor ? "Yes" : "No",
      },
    ]
  : [];
  const navigate = useNavigate();

  // const goToAddFaculty = () => {
  //   navigate("/adboard/faculty/add");
  // };

  return (
    <div className="flex-col">
      <div>
        <ParentNavbar />
      </div>
      <div className="w-full">
        {/* <div className="md:mt-10 md:ml-14 mt-16 md:flex md:items-start md:justify-start">
          <span className="text-sa-maroon  font-bold text-[32px] md:text-[36px]">
              Dashboard
          </span>
        </div> */}
        <div className="md:mt-14 mt-10">
          <div className="flex justify-between mx-10 md:mx-24">
            <span className="text-sa-maroon font-bold text-[28px] md:text-[36px]">
            Dashboard
            </span>
            <span
              className="text-sa-maroon font-bold text-xl md:text-2xl pt-0.5 mt-3"      
            >
             {data.map((data, index) => (
                <span key={index}>{data.StdName}</span>
              ))}
            </span>
          </div>
          <div className="overflow-x-auto mt-10 mx-10 md:ml-[6%] md:w-[90%] md:shadow-xl rounded-2xl">
            <table className="table-fixed min-w-full bg-sa-pink w-[800px] md:w-[50vw] rounded-2xl">
              <thead>
                <tr className="border-b border-sa-grey">
                  <th className="p-0 py-5  border-r border-sa-grey w-[100px]">
                    #
                  </th>
                  <th className="p-0 py-5  border-r border-sa-grey">
                    Course Title
                  </th>
                  <th className="p-0 py-5  border-r border-sa-grey">
                    Teacher Name
                  </th>
                  <th className="p-0 py-5  border-r border-sa-grey">
                    Present Hours
                  </th>
                  <th className="p-0 py-5  border-r border-sa-grey">
                    Absent Hours
                  </th>
                  <th className="p-0 py-5  border-sa-grey">
                    Total Hours
                  </th>
                    </tr>
              </thead>
              <tbody>
                {AttendanceData.map((faculty, index) => (
                  <tr key={index} className="border-b border-sa-grey">
                    <td className="p-0 py-5  border-r border-sa-grey w-[100px]">
                      {index + 1}
                    </td>
                    <td className="p-0 py-5  border-r border-sa-grey">
                      <span
                        className="block w-full h-full overflow-hidden overflow-ellipsis"
                        style={{ wordWrap: "break-word" }}
                      >
                        {faculty.courseTitle}
                      </span>
                    </td>
                    <td className="p-0 py-5  border-r border-sa-grey">
                      <span
                        className="block w-full h-full overflow-hidden overflow-ellipsis"
                        style={{ wordWrap: "break-word" }}
                      >
                        {faculty.teacherName}
                      </span>
                    </td>
                    <td className="p-0 py-5  border-r border-sa-grey">
                      <span
                        className="block w-full h-full overflow-hidden overflow-ellipsis"
                        style={{ wordWrap: "break-word" }}
                      >
                        {faculty.presentHrs}
                      </span>
                    </td>
                    <td className="p-0 py-5  border-r border-sa-grey">
                      <span
                        className="block w-full h-full overflow-hidden overflow-ellipsis"
                        style={{ wordWrap: "break-word" }}
                      >
                        {faculty.absentHrs}
                      </span>
                    </td>
                    <td className="p-0 py-5  border-sa-grey">
                      <span
                        className="block w-full h-full overflow-hidden overflow-ellipsis"
                        style={{ wordWrap: "break-word" }}
                      >
                        {faculty.totalHrs}
                      </span>
                    </td>
                    {/* <td className="p-2 py-5  border-sa-grey">
                      <span className="text-sa-maroon text-md underline mx-2 hover:cursor-pointer">
                        Edit
                      </span>
                      <span>|</span>
                      <span className="text-sa-maroon text-md underline mx-2 hover:cursor-pointer">
                        Delete
                      </span>
                    </td> */}
                  </tr>
                ))}
                <tr className="border-b-0">
                  <td className="md:py-32 py-16 border-r border-sa-grey w-[100px]"></td>
                  <td className="md:py-32 py-16 border-r border-sa-grey"></td>
                  <td className="md:py-32 py-16 border-r border-sa-grey"></td>
                  <td className="md:py-32 py-16 border-r border-sa-grey"></td>
                  <td className="md:py-32 py-16 border-r border-sa-grey"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentDashboard;
