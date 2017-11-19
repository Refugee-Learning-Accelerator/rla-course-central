package com.coffeebeans.android.easylearning;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btnTeacher = findViewById(R.id.btn_teacher);
        Button btnStudent = findViewById(R.id.btn_student);
        View.OnClickListener Studentlistener = new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity.this, GradesActivity.class);
                startActivity(intent);
            }
        };
        View.OnClickListener Teacherlistener = new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity.this, TeacherActivity.class);
                startActivity(intent);
            }
        };
        btnTeacher.setOnClickListener(Teacherlistener);
        btnStudent.setOnClickListener(Studentlistener);
    }
}
