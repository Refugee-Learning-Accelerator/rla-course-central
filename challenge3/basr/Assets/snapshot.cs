//Bismillah
//Code by Hisham Bedri and Gabe Fields
// 11/21/2017

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Vuforia;


public class snapshot : MonoBehaviour {



    public GameObject TextObject;

    public float CAMERA_DELAY = 0.2f;

    WebCamTexture webcam;
    CameraDevice cam;
    bool first = true;
    Texture2D tex;
    // Use this for initialization
    void Start () {
        tex = new Texture2D(2, 2);
        cam = CameraDevice.Instance;
        
        webcam = new WebCamTexture();
        Debug.Log("webcam pixels: " + webcam.width + " " + webcam.height);


    }



    // Update is called once per frame
    void Update () {

        
        bool worked = cam.SetFrameFormat(Image.PIXEL_FORMAT.GRAYSCALE, true);
        if (worked)
        {
            Image im = cam.GetCameraImage(Image.PIXEL_FORMAT.GRAYSCALE);
            /*
            if (first && (im!=null))
            {
                first = false;
                
                //Image im = cam.GetCameraImage(Image.PIXEL_FORMAT.GRAYSCALE);
                Debug.Log("im? " + (im == null));
                Debug.Log("im: " + im.BufferWidth + " " + im.BufferHeight);
                Debug.Log("tex: " + tex);
                tex = new Texture2D(im.BufferWidth, im.BufferHeight);
            }
            */
            //Debug.Log("yay!");
        }

        
        //if you hit "v" on your keyboard, it will perform a snapshot
        if (Input.GetKeyDown(KeyCode.V))
        {
            /*
            cam.Stop();
            cam.Deinit();

            webcam.Play();
            gameObject.GetComponent<MeshRenderer>().material.mainTexture = webcam;

            webcam.Stop();
            cam.Init(CameraDevice.CameraDirection.CAMERA_DEFAULT);
            cam.Start();
            */
            StartCoroutine(snap());

        }
        

	}

    public void snapShotPublicFunction()
    {
        StartCoroutine(snap());
    }

    IEnumerator snap()
    {

        cam.Stop();
        cam.Deinit();
        yield return new WaitForSeconds(CAMERA_DELAY);
        yield return new WaitForEndOfFrame();


        webcam.Play();
        yield return new WaitForSeconds(CAMERA_DELAY);
        yield return new WaitForEndOfFrame();



        gameObject.GetComponent<MeshRenderer>().material.mainTexture = webcam;
        yield return new WaitForSeconds(CAMERA_DELAY);


        
        if (first)
        {
            Debug.Log("first!");
            tex = new Texture2D(webcam.width, webcam.height,TextureFormat.ARGB32,false);
            first = false;
        }

        Debug.Log("tex length: " + tex.GetPixels32().Length);
        Debug.Log("webcam length: " + webcam.GetPixels32().Length);
        Debug.Log(webcam.GetPixel(250, 250));
        Color[] c = webcam.GetPixels();
        int nonzerocount = 0;
        for(int i = 0; i<c.Length; i++)
        {
            if(c[i].r > 0.0f)
            {
                nonzerocount++;
            }
        }
        Debug.Log("nonzerocount: " + nonzerocount);
        tex.SetPixels(c);
        tex.Apply();
        string imString = System.Convert.ToBase64String(tex.EncodeToJPG());

        JSONObject j = new JSONObject(JSONObject.Type.OBJECT);
        JSONObject requests = new JSONObject(JSONObject.Type.ARRAY);
        JSONObject featureList = new JSONObject(JSONObject.Type.ARRAY);
        
        JSONObject feature = new JSONObject(JSONObject.Type.OBJECT);
        feature.SetField("type", "LABEL_DETECTION");
        feature.SetField("maxResults", 10);
        featureList.Add(feature);

        JSONObject request = new JSONObject(JSONObject.Type.OBJECT);
        JSONObject content = new JSONObject(JSONObject.Type.STRING);
        content.SetField("content", imString);
        request.SetField("image", content);
        request.SetField("features", featureList);
        requests.Add(request);

        JSONObject super = new JSONObject(JSONObject.Type.OBJECT);
        super.SetField("requests", requests);

        // make web request!
        //this uses google vision api
        //we're paying for this api key, so please don't share it or the project :)
        string url = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCbJhOwLHEkuKM6d7yxNkfs17snC3PCFbw";

        Hashtable postHeader = new Hashtable();
        postHeader.Add("Content-Type", "application/json");

        // convert json string to byte
        var formData = System.Text.Encoding.UTF8.GetBytes(super.ToString());

        WWW api = new WWW(url, formData, postHeader);
        yield return api;
        Debug.Log("response from google: " + api.text);

        parseGoogleResponse(api.text);

        //System.IO.File.WriteAllText("D:/coolio.json", super.ToString());

        //System.IO.File.WriteAllBytes("D:/coolio.jpg", tex.EncodeToJPG());
        

        yield return new WaitForSeconds(CAMERA_DELAY);

        webcam.Stop();
        yield return new WaitForSeconds(CAMERA_DELAY);
        yield return new WaitForEndOfFrame();




        cam.Init(CameraDevice.CameraDirection.CAMERA_DEFAULT);
        cam.Start();


        yield return null;
    }

    void parseGoogleResponse(string text)
    {
        JSONObject responseObject = new JSONObject(text);
        List<JSONObject> labels = responseObject.GetField("responses").list[0].list[0].list;
        List<string> descriptionList = new List<string>();
        List<float> scoreList = new List<float>();


        for(int i = 0; i<labels.Count; i++)
        {
            //Debug.Log("label: " + labels[i]);
            string description = (string) labels[i].GetField("description").str;
            float score = (float)labels[i].GetField("score").n;
            descriptionList.Add(description);
            scoreList.Add(score);
            Debug.Log("description: " + description + " score: " + score);
        }

        StartCoroutine(displayText(descriptionList, scoreList));
    }


    public float displayDelay = 0.5f;
    IEnumerator displayText(List<string> descriptionList, List<float> scoreList)
    {
        TextObject.GetComponent<TextMesh>().text = "";
        for (int i = 0; i<descriptionList.Count; i++)
        {
            TextObject.GetComponent<TextMesh>().text += descriptionList[i] + " score: " + scoreList[i] + "\n";
            yield return new WaitForSeconds(displayDelay);
        }
        yield return null;
    }

}
