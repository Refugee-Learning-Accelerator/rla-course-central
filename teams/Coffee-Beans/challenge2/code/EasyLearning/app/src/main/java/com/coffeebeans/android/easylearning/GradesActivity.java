package com.coffeebeans.android.easylearning;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class GradesActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_grades);
        setTitle(getString(R.string.grades));
        Button btnFirst = findViewById(R.id.btn_grade_1);
        Button btnSecond = findViewById(R.id.btn_grade_2);
        Button btnThird = findViewById(R.id.btn_grade_3);
        Button btnFourth = findViewById(R.id.btn_grade_4);
        Button btnFifth = findViewById(R.id.btn_grade_5);
        Button btnSixth = findViewById(R.id.btn_grade_6);
        View.OnClickListener listener = new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Button btn=(Button)view;
                Intent intent = new Intent(GradesActivity.this, SubjectsActivity.class);
                intent.putExtra("TITLE",btn.getText().toString());
                startActivity(intent);
            }
        };
        btnFirst.setOnClickListener(listener);
        btnSecond.setOnClickListener(listener);
        btnThird.setOnClickListener(listener);
        btnFourth.setOnClickListener(listener);
        btnFifth.setOnClickListener(listener);
        btnSixth.setOnClickListener(listener);
    }
}
