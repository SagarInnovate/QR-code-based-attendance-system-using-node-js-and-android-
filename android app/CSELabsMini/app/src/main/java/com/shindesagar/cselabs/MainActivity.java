package com.shindesagar.cselabs;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import com.budiyev.android.codescanner.CodeScanner;
import com.budiyev.android.codescanner.CodeScannerView;
import com.budiyev.android.codescanner.DecodeCallback;
import com.google.zxing.Result;

public class MainActivity extends AppCompatActivity {
    private CodeScanner mCodeScanner;
    private static final int CAMERA_PERMISSION_REQUEST_CODE = 101;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        CodeScannerView scannerView = findViewById(R.id.scanner_view);

        // Check if camera permission is granted
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            // Request camera permission
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA}, CAMERA_PERMISSION_REQUEST_CODE);
        } else {
            // Permission is already granted; initialize and start the scanner
            initializeScanner(scannerView);
        }
    }

    private void initializeScanner(CodeScannerView scannerView) {
        mCodeScanner = new CodeScanner(this, scannerView);
        mCodeScanner.setAutoFocusEnabled(true);
        mCodeScanner.setDecodeCallback(new DecodeCallback() {
            @Override
            public void onDecoded(@NonNull final Result result) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        String scannedData = result.getText();
                       // int data=Integer.parseInt(scannedData);
                        if(scannedData.equals("CSE-1") || scannedData.equals("CSE-2") || scannedData.equals("CSE-3") || scannedData.equals("CSE-4")){
                            Toast.makeText(MainActivity.this, "Entry Successful in LAB: "+result.getText(), Toast.LENGTH_SHORT).show();
                        Intent intent = new Intent(MainActivity.this, webviewActivity.class);
                        intent.putExtra("scannedData", scannedData);
                        startActivity(intent);
                        }else{
                            Toast.makeText(MainActivity.this, "Wrong QR Code.... Please Scan Actual QR Code of LABS", Toast.LENGTH_SHORT).show();
                        }


//
                    }
                });
            }
        });

        scannerView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mCodeScanner.startPreview();
            }
        });
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED) {
            // Permission is granted; start the scanner
            mCodeScanner.startPreview();
        }
    }

    @Override
    protected void onPause() {
        if (mCodeScanner != null) {
            mCodeScanner.releaseResources();
        }
        super.onPause();
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == CAMERA_PERMISSION_REQUEST_CODE) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // Camera permission granted; initialize and start the scanner
                initializeScanner(findViewById(R.id.scanner_view));
            } else {
                // Camera permission denied; handle it accordingly (e.g., show a message or exit the app)
                Toast.makeText(this, "Camera permission denied. App cannot function without it.", Toast.LENGTH_LONG).show();
            }
        }
    }
}
