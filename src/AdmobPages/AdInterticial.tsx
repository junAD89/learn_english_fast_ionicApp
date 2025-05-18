import { AdMob, AdOptions } from "@capacitor-community/admob"

export async function showInterstitialAd() {
    const interstitialOption: AdOptions = {
        adId: "ca-app-pub-9593128253360038/4519587754",
    }

    // await AdMob.prepareInterstitial(interstitialOption)
    await AdMob.showInterstitial()
}
