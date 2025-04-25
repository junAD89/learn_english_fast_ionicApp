import { AdMob, AdOptions } from "@capacitor-community/admob";
import React, { useEffect } from 'react'

export default function AdInterticial() {
    useEffect(() => {

        const showInterticial = async () => {
            const intertitialOption: AdOptions = {
                adId: "ca-app-pub-9593128253360038/4519587754"
            }
            await AdMob.prepareInterstitial(intertitialOption);
            await AdMob.showInterstitial()
        };
        showInterticial();
    }, [])
    return (
        <div>AdInterticial</div>
    )
}
