import st from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <img src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg"
                 alt="Баннер"/>
            <div className={st.avatar}>
                <h3>Аватар + описание</h3>
            </div>
        </div>
    );
}

export default ProfileInfo;