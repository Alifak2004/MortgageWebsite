import cx from './SocialLink.module.css'

export default function SocialLink({iconcs}) {
    return (
        <>
            <div className={`p-2 ${cx.container}`}>
                <a href='#'><i className={iconcs}></i></a>
            </div>
        </>
    )
}