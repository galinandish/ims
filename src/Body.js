import React from 'react'
import "./Body.css"
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import EmojiEventsSharpIcon from '@mui/icons-material/EmojiEventsSharp';
// import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
// import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import Profile from '../../ims/src/images/Profile.png';
import Viewattendence from '../../ims/src/images/View attendence.png';
import ManageStudentRegistration from '../../ims/src/images/Manage Student Registration.png';
import InstitutionalCalender from '../../ims/src/images/institutional Calender.png';
import SemesterResults from '../../ims/src/images/Semester Results.png';
import Instructions from '../../ims/src/images/Instructions.png';
import institutionalholidays from '../../ims/src/images/institutional Holidays.png';
import ExamTimeTable from '../../ims/src/images/Exam Time-Table.png';
import SyllabusSubjectView from '../../ims/src/images/Subject Syllabus View.png'; 
import alerts from '../../ims/src/images/Alerts.png';




function Body() {
    return (
        <div className="home_body">
            <div classname="home_body_icons">
                
               <img src={Profile} className={"Profile"} alt={Profile} height={250} width={210}/>

               <img src={Viewattendence} className={"Viewattendence"} alt={Viewattendence} height={250} width={210}/>

               <img src={ManageStudentRegistration} className={"ManageStudentRegistration"} alt={ManageStudentRegistration} height={250} width={210}/>

               <img src={InstitutionalCalender} className={"institutionalCalender"} alt={InstitutionalCalender} height={250} width={210}/>
 
               <img src={SemesterResults} className={"SemesterResults"} alt={SemesterResults} height={250} width={210}/>
               
               <img src={Instructions} className={"Instructions"} alt={Instructions} height={250} width={210}/>

               <img src={institutionalholidays} className={"institutionalholidays"} alt={institutionalholidays} height={250} width={210}/>

               <img src={ExamTimeTable} className={"Examtimetable"} alt={ExamTimeTable} height={250} width={210}/>

               <img src={SyllabusSubjectView} className={"SyllabusSubjectView"} alt={SyllabusSubjectView} height={250} width={210}/>

               <img src={alerts} className={"alerts"} alt={alerts} height={250} width={210}/>


            </div>

        </div>
    )
}

export default Body
