import {IconComp} from "./IconComp";
import { useRecoilValue } from 'recoil';
import { networkAtom, jobsAtom, notificationAtom, messagesAtom } from '../atoms';
import './TopBar.css';
import home from '../assets/home.svg'
import myNetwork from '../assets/myNetwork.svg'
import job from '../assets/jobs.svg'
import message from '../assets/message.svg'
import notification from '../assets/notification.svg'
import downArrow from '../assets/downArrow.svg'
import chinni from '../assets/chinni.jpg'
import { meSumSelector } from '../atoms';
import { useRecoilState } from 'recoil';
export default function TopBar(){
    const network = useRecoilValue(networkAtom);
    const notifications = useRecoilValue(notificationAtom);
    const messages = useRecoilValue(messagesAtom);
    const meSum = useRecoilValue(meSumSelector);
    const [jobs, setJobs] = useRecoilState(jobsAtom);
    const incrementJobs = () => {
        setJobs(jobs + 1);
    };
    return(
        <div className='topBar'>
            <IconComp icon={home} title='Home' />
            <IconComp icon={myNetwork} value={network} title='My Network' />
            <IconComp icon={job} value={jobs} title='Jobs' />
            <IconComp icon={message} value={messages} title='Messages' />
            <IconComp icon={notification} value={notifications} title='Notifications' />
            <IconComp icon={chinni} title={<span style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>Me <img src={downArrow} alt="downArrow" /></span>} />
            
        </div>
    )
}