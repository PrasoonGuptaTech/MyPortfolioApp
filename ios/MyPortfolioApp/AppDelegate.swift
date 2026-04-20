import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider

@main
class AppDelegate: RCTAppDelegate {
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
  ) -> Bool {

    self.moduleName = "MyPortfolioApp"
    self.dependencyProvider = RCTAppDependencyProvider()

    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }
}