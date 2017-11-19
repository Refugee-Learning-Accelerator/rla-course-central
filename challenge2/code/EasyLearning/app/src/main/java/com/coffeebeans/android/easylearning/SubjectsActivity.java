package com.coffeebeans.android.easylearning;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class SubjectsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_subjects);
        setTitle(getIntent().getStringExtra("TITLE"));
        Button btnEnglish = findViewById(R.id.btn_english);
        Button btnKurdi = findViewById(R.id.btn_kurdi);
        Button btnMath = findViewById(R.id.btn_math);
        Button btnScience = findViewById(R.id.btn_science);

        View.OnClickListener listener = new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Button btn=(Button)view;
                Intent intent = new Intent(SubjectsActivity.this, StudentActivity.class);
                intent.putExtra("TITLE",btn.getText().toString());
                startActivity(intent);
            }
        };
        btnScience.setOnClickListener(listener);
        btnEnglish.setOnClickListener(listener);
        btnMath.setOnClickListener(listener);
        btnKurdi.setOnClickListener(listener);
    }
}
