import React from 'react';
import {Image, Divider, Header, Icon, Grid,Button} from 'semantic-ui-react'





class Buttons extends React.Component
{


    constructor(){
        super();
        this.state = 
        {
            likes:0,
            share:0
        }
    }

    Add_likes = () =>
    {
        this.setState(prevState =>
            ({
                likes: prevState.likes+1
            }))
    }
    Add_share = () =>
    {
        this.setState(prevState =>
            ({
                share: prevState.share+1
            }))
    }

    render()
    {
        return(
            <div>
                <Button
                    color='red'
                    content='Like'
                    icon='heart'
                    label={{ basic: true, color: 'red', pointing: 'left', content:this.state.likes}}
                    onClick = {() => this.Add_likes() }
                    />
                <Button
                    color='blue'
                    content='Share'
                    icon='fork'
                    label={{
                        as: 'a',
                        basic: true,
                        color: 'blue',
                        pointing: 'left',
                        content: this.state.share,
                    }}
                    onClick = {() => this.Add_share() }
                />
            </div>

        );
    }
}


export default Buttons;
