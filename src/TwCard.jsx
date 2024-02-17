import { useState } from 'react'

export function TWCard ({formatUser, userName, children}) {

    const [isFollowing, setIsFollowing] = useState(false);

    const imgUser = `https://unavatar.io/${userName}`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-a-button is-following' : 'tw-a-button'; 

    const handleClik = () => {
        setIsFollowing(!isFollowing);
    }

    return(
        <article className='tw-a'>
        <header className='tw-a-header'> 
            <img
            className='tw-a-avatar' 
            src={imgUser}
            alt="El avatar de alguien"  />
            <div className='tw-a-info'>
                <strong>{children }</strong>
                <span className='tw-a-infoUserName'>{formatUser(userName)}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClik}>
                {text}
            </button>
        </aside>
    </article>
    )
}