import React, { useEffect } from 'react'
import {
    AdMob,
    BannerAdOptions,
    BannerAdPosition,
    BannerAdSize,
} from '@capacitor-community/admob'

export default function AdBanner() {
    const showBanner = async () => {
        const bannerOptions: BannerAdOptions = {
            adId: 'ca-app-pub-9593128253360038/5083770900', // ID test
            adSize: BannerAdSize.BANNER,
            position: BannerAdPosition.BOTTOM_CENTER,
            isTesting: true,
            margin: 0,
        }

        await AdMob.showBanner(bannerOptions)
    }

    useEffect(() => {
        showBanner()
    }, []) // ✅ ceci évite que la pub soit appelée à chaque render

    return <div>
        <br />
        <br />

    </div>
}
