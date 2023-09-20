import {SettingContainer, Title, PhotoPage, } from './SettingsPage.styled'

import { UserInformation } from 'components/UserInformation';

const SettingsPage=()=>{
    return (
        <SettingContainer>
            <Title>Profile setting</Title>
            <PhotoPage />
            <UserInformation/>
        </SettingContainer>
    )
}

export default SettingsPage