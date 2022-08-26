import { Button, Input } from "antd";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import AppHeader from "../../components/app_header/AppHeader";
import './Faucet.css'
const dev_mode = true;

export default function Faucet(params) {

    let search = decodeURI( new URLSearchParams(useLocation().search).get("code")||'' )

    const [ tab, setTab ] = React.useState("faucet");
    const [ clicked, setClicled ] = React.useState(dev_mode);
    const [ loginStatus, setLoginStatus] = React.useState(false)
    const [ address, setAddress] = React.useState()

    const GithubLogin = () =>{
        const authorize_uri = 'https://github.com/login/oauth/authorize'
        const client_id = '085179e8fee46b886215'
        const redirect_url = 'http://localhost:3000/faucet'
        window.location.href = `${authorize_uri}?client_id=${client_id}&redirect_url=${redirect_url}`
    }

    const Submit = () =>{
        fetch(`http://localhost:3101/saas3/airdrop/faucet?address=${address}`,{method:"GET"})
        .then(response=>{
            if(response.status===200){
                console.log("success")
                return response.json()
            }
        })
    }

    console.log(search)

    React.useEffect(()=>{
        if(search!==undefined){
            setLoginStatus(true)
        }
    },[search])

    return(
        <div>
            <AppHeader 
                setClicled={setClicled}
                tab={tab}
                setTab={setTab}
            />

            <div className="faucet-main">
                <div style={{"display":"flex","flexDirection":"column","justifyContent":"space-between","height":"15vmin"}}>
                    <Input 
                        placeholder={loginStatus?"Enter Your ETH Address":"You need a GitHub account to get your AGIX"}
                        value={address}
                        onChange={(e)=>{setAddress(e.target.value)}}
                        disabled={!loginStatus}
                        size="large"
                    ></Input>
                    <Button
                        type="primary"
                        onClick={()=>{
                            if(loginStatus===false)
                                GithubLogin()
                            else Submit()
                        }}
                    >{loginStatus?"Submit":"Login Github"}</Button>
                </div>
            </div>
        </div>
    )
}