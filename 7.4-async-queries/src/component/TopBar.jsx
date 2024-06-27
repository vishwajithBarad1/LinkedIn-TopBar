import {IconComp} from "./IconComp";
import { useRecoilValue } from 'recoil';
import './TopBar.css';
import home from '../assets/home.svg'
import myNetwork from '../assets/myNetwork.svg'
import job from '../assets/jobs.svg'
import message from '../assets/message.svg'
import notification from '../assets/notification.svg'
import downArrow from '../assets/downArrow.svg'
import chinni from '../assets/chinni.jpg'
import axios from 'axios';
import { notifications, totalNotificationSelector } from '../atoms'

export default function TopBar(){
    const notify = useRecoilValue(notifications);
    const meSum = useRecoilValue(totalNotificationSelector);

    return(
        <div className='topBar'>
            <IconComp icon={home} value="O" title='Home' />
            <IconComp icon={myNetwork} value={notify.network} title='My Network' />
            <IconComp icon={job} value={notify.jobs} title='Jobs' />
            <IconComp icon={message} value={notify.messaging} title='Messages' />
            <IconComp icon={notification} value={notify.notifications} title='Notifications' />
            <IconComp icon={chinni} title={<span style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>Me <img src={downArrow} alt="downArrow" /></span>} />
        </div>
    )
}