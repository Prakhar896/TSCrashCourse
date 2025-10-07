import { EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiFlexGroup, EuiPageHeader, EuiSpacer, EuiText, EuiTitle } from '@elastic/eui'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Home() {
    return (
        <div style={{ padding: '20px' }}>
            <EuiFlexGroup direction='row' justifyContent='flexStart' alignItems='center'>
                <EuiTitle size='l'><h1>Brewthical2</h1></EuiTitle>
                <EuiSpacer />
                <EuiButtonEmpty onClick={() => { }}>Home</EuiButtonEmpty>
                <EuiButtonEmpty onClick={() => { }}>About Us</EuiButtonEmpty>
                <EuiButtonEmpty onClick={() => { }}>Products</EuiButtonEmpty>
                <EuiSpacer />
                {/* <EuiButtonIcon
                    color='primary'
                    display='fill'
                    iconSize='m'
                    onClick={() => {}}
                ><FaSearch /></EuiButtonIcon> */}
            </EuiFlexGroup>
        </div>
    )
}