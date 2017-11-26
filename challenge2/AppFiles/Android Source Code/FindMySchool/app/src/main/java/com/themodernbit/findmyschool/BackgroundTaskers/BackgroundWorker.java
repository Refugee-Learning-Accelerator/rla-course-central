package com.themodernbit.findmyschool.BackgroundTaskers;

import android.app.AlertDialog;
import android.content.Context;
import android.os.AsyncTask;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Tuna on 9/4/17.
 */

public class BackgroundWorker extends AsyncTask<String, Void, String> {

    private Context mContext;


    private AlertDialog alertDialog;
    public boolean foundRandomWorkers = false;


    private List<String> randomSchoolsList = new ArrayList<String>();
    public String[] randomSchoolsArray;



    public BackgroundWorker(Context theContext){
        mContext = theContext;
    }

    // These inputs are not important just stating what
    // Ill fill later on!

    @Override
    protected String doInBackground(String... params) {

        String Type = params[0];


        String MainUrlString = "http://www.themodernbit.com/MIT/Project 2/getSchools.php";


        if (Type.equals("Schools")){

                try {

                    URL MainUrl = new URL(MainUrlString);
                    HttpURLConnection httpURLConnection = (HttpURLConnection) MainUrl.openConnection();
                    httpURLConnection.setRequestMethod("POST");
                    httpURLConnection.setDoOutput(true);
                    httpURLConnection.setDoInput(true);

                    OutputStream outStream = httpURLConnection.getOutputStream();
                    BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(outStream,"UTF-8"));

                    String postData = URLEncoder.encode("Schools", "UTF-8") + "=" + URLEncoder.encode(Type, "UTF-8");

                    bufferedWriter.write(postData);
                    bufferedWriter.flush();
                    bufferedWriter.close();
                    outStream.close();

                    InputStream inStream = httpURLConnection.getInputStream();
                    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inStream, "UTF-8"));

                    String result = "";
                    String line;


                    while((line = bufferedReader.readLine()) != null){
                        randomSchoolsList.add(line);
                        randomSchoolsList.add("KEY_BREAK");

                    }

                    bufferedReader.close();
                    inStream.close();

                    httpURLConnection.disconnect();

                    return result;

                } catch (MalformedURLException e) {
                    e.printStackTrace();
                } catch (IOException e) {
                    e.printStackTrace();
                }


            }



        return null;
    }

    @Override
    protected void onPreExecute() {
        alertDialog = new AlertDialog.Builder(mContext).create();
            alertDialog.setTitle("Status");

    }

    @Override
    protected void onPostExecute(String result) {
        if(result == null)
            return;

      if(randomSchoolsList.get(0).contains("CodeXE2001")){
            result = randomSchoolsList.toString();
            randomSchoolsArray = result.split("KEY_BREAK|CodeXE2001|\\[");
            foundRandomWorkers = true;
        }

        else {
            alertDialog.setMessage(result);
//            alertDialog.show();

        }
    }

    @Override
    protected void onProgressUpdate(Void... values) {
        super.onProgressUpdate(values);
    }
}
