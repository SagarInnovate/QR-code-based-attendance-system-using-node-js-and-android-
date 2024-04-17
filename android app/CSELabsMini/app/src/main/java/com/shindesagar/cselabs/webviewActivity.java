package com.shindesagar.cselabs;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Bundle;
import android.os.Handler;
import android.webkit.JavascriptInterface;
import android.os.Looper;
import android.widget.Toast;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ProgressBar;
import android.app.AlertDialog;

public class webviewActivity extends Activity {
    private static WebView webView;
    private ProgressBar progressBar;
    private Handler handler;
    private boolean isConnected = true; // Initial assumption

    @SuppressLint("JavascriptInterface")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        Intent receivedIntent = getIntent();
        if (receivedIntent != null) {
            String labData = receivedIntent.getStringExtra("scannedData");

            if (labData != null && labData.contains("-")) {
                // Splitting the data into department and lab_no
                String[] parts = labData.split("-");
                String department = parts[0];
                String lab_no = parts[1];

                // Passing data to WebView JavaScript function
                webView.loadUrl("javascript:enterInLab2('" + department + "', '" + lab_no + "')");
            }
        }
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_webview);

        // Initialize WebView
        webView = findViewById(R.id.webview);
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setAllowContentAccess(true);
        webSettings.setAllowFileAccess(true);

        // Initialize ProgressBar
        progressBar = findViewById(R.id.progress_bar);
        progressBar.setVisibility(ProgressBar.GONE); // Hide initially

        // Configure WebView client
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                view.loadUrl(url);
                return true;
            }

            @Override
            public void onPageStarted(WebView view, String url, android.graphics.Bitmap favicon) {
                // Show the ProgressBar when the page starts loading
                progressBar.setVisibility(ProgressBar.VISIBLE);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                // Hide the ProgressBar when the page finishes loading
                progressBar.setVisibility(ProgressBar.GONE);
            }
        });
        webView.addJavascriptInterface(new WebAppInterface(this), "Android");

        // Load the initial URL
        webView.loadUrl("file:///android_asset/login.html");

        // Initialize the Handler to check the internet connection periodically
        handler = new Handler(Looper.getMainLooper());

        // Check internet connectivity periodically
        checkInternetPeriodically();
    }

    @Override
    public void onBackPressed() {
        // Check if the WebView can go back to a previous page
        if (webView != null && webView.canGoBack()) {
            webView.goBack(); // Go back to the previous page
        } else {
            new AlertDialog.Builder(this)
                    .setMessage("Are you sure you want to exit the app?")
                    .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                        public void onClick(DialogInterface dialog, int which) {
                            // If the user confirms, exit the app
                            finish();
                        }
                    })
                    .setNegativeButton("No", null)
                    .show();// If the WebView cannot go back, perform the default back button action (exit app)
        }
    }
    private void showInternetAlert() {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setMessage("Turn on the internet?")
                .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        // User chose to turn on the internet, continue checking
                        isConnected = true;
                        handler.postDelayed(new Runnable() {
                            @Override
                            public void run() {
                                checkInternetPeriodically();
                            }
                        }, 2000);
                    }
                })
                .setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        // User chose to cancel, exit the app if not connected
                        if (!isConnected) {
                            finish();
                        }
                    }
                });
        builder.setCancelable(false);
        builder.show();
    }

    // ... Rest of your code ...

    private void checkInternetPeriodically() {
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                // Check the internet connection
                if (!isNetworkAvailable()) {
                    // Internet is off, show an alert
                    showInternetAlert();
                } else {
                    // Internet is on, continue checking periodically
                    handler.postDelayed(this, 2000);
                }
            }
        }, 2000); // Check every 2 seconds
    }

    private boolean isNetworkAvailable() {
        ConnectivityManager connectivityManager = (ConnectivityManager) getSystemService(CONNECTIVITY_SERVICE);
        NetworkInfo networkInfo = connectivityManager.getActiveNetworkInfo();
        return networkInfo != null && networkInfo.isConnected();
    }

    public class WebAppInterface {
        private Context mContext;

        public WebAppInterface(Context context) {
            mContext = context;
        }

        @JavascriptInterface
        public void openScannerActivity() {
            Intent i = new Intent(mContext, MainActivity.class);
            mContext.startActivity(i);
        }
    }
}
