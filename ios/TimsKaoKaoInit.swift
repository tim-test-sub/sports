//
//  AppDelegate.swift
//  MyBadmintonApp
//
//  Created by sungmin kim on 9/8/24.
//
import Foundation
import KakaoSDKCommon  // Kakao SDK를 사용한다면 import

@objc(TimsKaoKaoInit)
class TimsKaoKaoInit : NSObject{

  @objc
  func initKakao() {

    // Kakao SDK 초기화 (선택사항)
    KakaoSDK.initSDK(appKey: "874e5d78840065ceb197c73a428ba65a")
 
  }
}
