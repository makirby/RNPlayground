#import "AppDelegate.h"
#import <ReactNativeNavigation/ReactNativeNavigation.h>
#import <RNCrashes/RNCrashes.h>
#import <RNAnalytics/RNAnalytics.h>
#import <RNMobileCenter/RNMobileCenter.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{

  [RNCrashes registerWithCrashDelegate: [[RNCrashesDelegateAlwaysSend alloc] init]];  // Initialize Mobile Center crashes

  [RNAnalytics registerWithInitiallyEnabled:true];  // Initialize Mobile Center analytics

  [RNMobileCenter register];  // Initialize Mobile Center 

  NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  
  [ReactNativeNavigation bootstrap:jsCodeLocation launchOptions:launchOptions];
  return YES;
}

@end
