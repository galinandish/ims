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
import MyDashboard from '../../ims/src/images/My Dashboard.png';
import MyCalender from '../../ims/src/images/My Calender.png';
import Events from '../../ims/src/images/Events.png';
import Notice from '../../ims/src/images/Notice.png';
import Downloads from '../../ims/src/images/Downloads.png';
import PhotoGallery from '../../ims/src/images/Photo Gallery.png';
import ViewPerformanceDetails from '../../ims/src/images/View Performance Details.png';
import TimeTable from '../../ims/src/images/Time-Table.png';
import AssignmentDetails from '../../ims/src/images/Assignment Details.png';




function Body() {
    return (
        <div className="home_body">
            <div classname="home_body_icons">
                
               <img src={Profile} className={"Profile"} alt={Profile} height={170} width={170}/>
                
               <img src={MyDashboard} className={"MyDashboard"} alt={MyDashboard} height={170} width={170}/>

               <img src={Events} className={"Events"} alt={Events} height={170} width={170}/>

               <img src={Notice} className={"Notice"} alt={Notice} height={170} width={170}/>

               <img src={Viewattendence} className={"Viewattendence"} alt={Viewattendence} height={170} width={170}/>

               <img src={ManageStudentRegistration} className={"ManageStudentRegistration"} alt={ManageStudentRegistration} height={170} width={170}/>

               <img src={InstitutionalCalender} className={"institutionalCalender"} alt={InstitutionalCalender} height={170} width={170}/>

               <img src={MyCalender} className={"MyCalender"} alt={MyCalender} height={170} width={170}/>
 
               <img src={SemesterResults} className={"SemesterResults"} alt={SemesterResults} height={170} width={170}/>

               <img src={ViewPerformanceDetails} className={"ViewPerformanceDetails"} alt={ViewPerformanceDetails} height={170} width={170}/>

               <img src={AssignmentDetails} className={"AssignmentDetails"} alt={AssignmentDetails} height={170} width={170}/>
               
               <img src={Instructions} className={"Instructions"} alt={Instructions} height={170} width={170}/>

               <img src={Downloads} className={"Downloads"} alt={Downloads} height={170} width={170}/>

               <img src={PhotoGallery} className={"PhotoGallery"} alt={PhotoGallery} height={170} width={170}/>

               <img src={institutionalholidays} className={"institutionalholidays"} alt={institutionalholidays} height={170} width={170}/>

               <img src={ExamTimeTable} className={"Examtimetable"} alt={ExamTimeTable} height={170} width={170}/>

               <img src={TimeTable} className={"TimeTable"} alt={TimeTable} height={170} width={170}/>

               <img src={SyllabusSubjectView} className={"SyllabusSubjectView"} alt={SyllabusSubjectView} height={170} width={170}/>

               <img src={alerts} className={"alerts"} alt={alerts} height={170} width={170}/>

              


            </div>

        </div>
    )
}

export default Body
