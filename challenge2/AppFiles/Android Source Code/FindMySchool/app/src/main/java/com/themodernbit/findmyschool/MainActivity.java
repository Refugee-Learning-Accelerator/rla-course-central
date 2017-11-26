package com.themodernbit.findmyschool;

import android.content.Intent;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.method.ScrollingMovementMethod;
import android.view.View;
import android.widget.Button;
import android.widget.ListView;
import android.widget.TextView;

import com.themodernbit.findmyschool.BackgroundTaskers.BackgroundWorker;
import com.themodernbit.findmyschool.SchoolManagement.School;

import java.util.List;

public class MainActivity extends AppCompatActivity {

    private BackgroundWorker theWorker;
    private School[] mSchoolArray = new School[100];

    private TextView mTestText;
    private TextView mSchoolName;
    private TextView mSchoolDescription;
    private TextView mFees;

    private Button mButtonOpenMaps;

    private Double Longitude = 0.0;
    private Double Latitude = 0.0;
    private String SchoolName = "";
    private Handler h = new Handler();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mTestText = (TextView) findViewById(R.id.textViewMain);
        mSchoolName = (TextView) findViewById(R.id.textView_SchoolName);
        mSchoolDescription = (TextView) findViewById(R.id.textView_Description);
        mFees = (TextView) findViewById(R.id.textView_Fees);

        mButtonOpenMaps = (Button) findViewById(R.id.buttonMap);

        mSchoolDescription.setMovementMethod(new ScrollingMovementMethod());

        mButtonOpenMaps.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent openMapIntent = new Intent(getApplication(), MapsActivity.class);
                openMapIntent.putExtra("Longitude" , Longitude);
                openMapIntent.putExtra("Latitude", Latitude);
                openMapIntent.putExtra("SchoolName", SchoolName);
                startActivity(openMapIntent);

            }
        });


        onBoot();
    }

    private void onBoot() {

        String Type = "Schools";
        theWorker = (BackgroundWorker) new BackgroundWorker(getApplicationContext()).execute(Type);


        Runnable r = new Runnable() {

            @Override
            public void run() {

                mSchoolArray[0] = new School(theWorker.randomSchoolsArray[2], theWorker.randomSchoolsArray[4],
                        theWorker.randomSchoolsArray[3], theWorker.randomSchoolsArray[5], theWorker.randomSchoolsArray[6]);

                String StandardFormat = mSchoolArray[0].getAllWorkerInfo();
                StandardFormat = StandardFormat.replaceAll(",", "");


                    mSchoolName.setText(mSchoolArray[0].schoolName);
                    mSchoolDescription.setText(mSchoolArray[0].schoolDesc);
                    mFees.setText("Fees: " + mSchoolArray[0].schoolFees + " LL");
                    Longitude = Double.parseDouble(mSchoolArray[0].schoolLong);
                    Latitude = Double.parseDouble(mSchoolArray[0].schoolLat);
                    SchoolName = mSchoolArray[0].schoolName;

                //mTestText.setText(StandardFormat);
                theWorker.cancel(true);
                // This has allowed me to free more RAM by cancelling the worker after each attempt

            }
        };

        h.postDelayed(r, 1000);

    }


}

