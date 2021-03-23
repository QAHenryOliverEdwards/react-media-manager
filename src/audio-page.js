import React from 'react';
import './bootstrap.css'

export class Frame extends React.Component {
    render() {
        return (
            <div id={'frame'} className={'container-fluid text-white'}>
                <div id={'top-bar'}/>
                <div id={'audio-page'}/>
            </div>
        )
    }
}

// TODO implement actual search functionality when
export class TopBar extends React.Component {
    render() {
        return (
            <div className={'row'}>
                <div className={'col-2'}/>
                <div className={'col-8'}>
                    <div className={'input-group'}>
                        <input type={'search'} id={'search-bar'} className={'form-control'}
                               placeholder={'Search here'}/>
                        <button type={'submit'} id={'search-button'} className={'btn btn-secondary'}>Search</button>
                    </div>
                </div>
                <div className={'col-2'}/>
            </div>
        )
    }
}

export class AudioPage extends React.Component {
    render() {
        return (
            <div className={'row'}>
                <div className={'col-2'} id={'search-options'}/>
                <div className={'col-8'} id={'search-results'}/>
                <div className={'col-2'} id={'recent-history'}/>
            </div>
        )
    }
}