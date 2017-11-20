package com.coffeebeans.android.easylearning;

import android.content.Intent;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.TextView;

public class TeacherActivity extends AppCompatActivity {
    TextView dialog;
    ProgressBar progressBar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_teacher);
        dialog = findViewById(R.id.txtDialog);
        progressBar = findViewById(R.id.progress);
        Button btn = findViewById(R.id.btnStartSession);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                dialog.setVisibility(View.VISIBLE);
                progressBar.setVisibility(View.VISIBLE);
                new AsyncTask<Void, Void, Void>() {
                    @Override
                    protected Void doInBackground(Void... voids) {
                        try {
                            Thread.sleep(3000);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                        return null;
                    }

                    @Override
                    protected void onPostExecute(Void aVoid) {
                        Intent intent = new Intent(TeacherActivity.this, SessionActivity.class);
                        startActivity(intent);
                        hide();

                    }


                }.execute();

            }
        });
    }

    public void hide() {
        dialog.setVisibility(View.GONE);
        progressBar.setVisibility(View.GONE);
    }
}



