package com.themodernbit.findmyschool.SchoolManagement;

/**
 * Created by Tuna on 11/24/17.
 */

public class School {

    public String schoolName, schoolLong, schoolLat, schoolDesc, schoolFees;

    public School (String SchoolName, String SchoolLong, String SchoolLat, String SchoolDesc,
                      String SchoolFees){

        schoolName = SchoolName.replaceAll(",", "");
        schoolLong = SchoolLong.replaceAll(",", "");
        schoolLat = SchoolLat.replaceAll(",", "");
        schoolDesc = SchoolDesc.replaceAll(",", "");
        schoolFees = SchoolFees.replaceAll(",", "");


    }


    public String getAllWorkerInfo() {


        return  schoolName + "\n" + schoolLong + "\n" + schoolLat + "\n" +
                schoolDesc + "\n" + schoolFees;

    }


}
