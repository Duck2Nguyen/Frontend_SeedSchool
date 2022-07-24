import { useState } from 'react';
import './Activity.scss'
import Header from '../Header/Header';
import s2 from '../../images/s2.jpg'


function Activity() {
    const handleInput = () => {
    }
    const [value, setValue] = useState('');
    const [arrValue, setarrValue] = useState([]);
    return (
        <div className='container-display'>
            <Header></Header>
            <div className='activity-container'>
                <div className='content-left'>
                    <img src={s2} className='content-image'></img>
                </div>
                <div className='content-right'>
                    <div className='activity-title'>Cooking</div>
                    <div className='activity-desc'>
                        Cooking is an essential life skill, but it's hard for many people to master.
                        As a cooking teacher, you'll be able to help your students improve their lives and their diets!
                        If you're ready to take your kitchen skills into the classroom, start by planning the lesson you want to teach. Then, conduct your cooking class to show students how to do the skills they're learning. As you teach them, keep students engaged with hands-on activities
                    </div>

                    <button className='btn'>
                        Errol
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Activity