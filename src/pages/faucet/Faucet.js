import { Button, Input, message} from "antd";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import AppHeader from "../../components/app_header/AppHeader";
import './Faucet.css'
const dev_mode = false;

export default function Faucet(params) {

    let search = decodeURI( new URLSearchParams(useLocation().search).get("code")||'' )

    const [ tab, setTab ] = React.useState("faucet");
    const [ clicked, setClicled ] = React.useState(dev_mode);
    const [ loginStatus, setLoginStatus] = React.useState(false)
    const [ address, setAddress] = React.useState('')

    const GithubLogin = () =>{
        const authorize_uri = 'https://github.com/login/oauth/authorize'
        const client_id = '72a17290c572de6117e4'
        const redirect_url = 'http://rpc.saas3.io:3000/faucet'
        window.location.href = `${authorize_uri}?client_id=${client_id}&redirect_url=${redirect_url}`
    }

    const Submit = () =>{
        if (address.length==0){
            message.error('please input your address');
            return;
        }
        fetch(`http://rpc.saas3.io:3101/saas3/airdrop/faucet?address=${address}`,{method:"GET"})
        .then(response=>{
            if(response.status===200){
                message.success("100 test tokens will be sent to your address");
                return response.json()
            } else{
                message.error("pending, please wait.");
            }
        });    
    }

    React.useEffect(()=>{
        if(search.length!=0){
            setLoginStatus(true)
        }
    },[])

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
                        placeholder={loginStatus?"Paste Your Polkadot Address":"Please Click GitHub Login Button"}
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