---
layout: post
title: "Create your first project in AndroidIDE"
date: 2021-09-12 10:54:50 -0000
categories: AndroidIDE how-to
---
![AndroidIDE](https://raw.githubusercontent.com/itsaky/itsaky.github.io/master/_posts/images/androidide-header.jpg)

Hey there 👋,  
This post will guide you on how to create and build your first Android app project in AndroidIDE.

## What you'll need
- AndroidIDE installed properly 
- A good internet connection (to download dependencies)

## Create a project

Start AndroidIDE and you'll be on the main screen. You'll see options to create a new project, open an existing one, terminal or customize your preferences.  
- Click on **```Create new project```**
- Type your app's name, package name, minimum SDK and target SDK.

There are few project templates included in AndroidIDE, you can choose any one of them. For instance, I'll go with an Empty project.  
Click on **```Create project```** button to actually create the project. The created project will be opened automatically.

## Build the project
When a project is opened, a Gradle build is started automatically. This build will make sure that all the dependencies are downloaded. After the build is successful, AndroidIDE will find all the downloaded dependencies, initialize the project and start the necessary services (like code completion).  
Click on the Floating Action Button in the bottom right corner of your screen. You'll find these options :  
![View Options](https://raw.githubusercontent.com/itsaky/itsaky.github.io/master/_posts/images/0/build-options.jpg)

To see the full build output, click on **```Build Output```**.  
You can also see a one-line status of the build at the bottom of the screen.  
![Status Bar](https://raw.githubusercontent.com/itsaky/itsaky.github.io/master/_posts/images/0/status-bar.jpg)

Once the initial build is finished, you'll see the status bar showing ```Service Started``` :  
![Service Started](https://raw.githubusercontent.com/itsaky/itsaky.github.io/master/_posts/images/0/service-started.jpg)

### Working with the project
AndroidIDE can open any file which is ```UTF-8``` encoded. Currently, auto completion is available only for Java, XML and Gradle.  

In this example, we'll just add a button in our layout and show a toast when it is clicked.  
Open the ```activity_main.xml``` file and replace the default ```TextView``` with ```Button``` in the layout.  
```xml
<Button
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Click me!"
    app:layout_constraintBottom_toBottomOf="parent"
    app:layout_constraintLeft_toLeftOf="parent"
    app:layout_constraintRight_toRightOf="parent"
    app:layout_constraintTop_toTopOf="parent" />
```

Now open your ```MainActivity.java``` file. We'll initialize the button using ```findViewById``` in ```onCreate``` method and then set an ```OnClickListener``` to it.  
```java
Button button = findViewById(R.id.button);
button.setOnClickListener(v -> {
    Toast.makeText(MainActivity.this, "You clicked me!", Toast.LENGTH_SHORT).show();
});
```

Now click on the ```Quick run``` button in the toolbar to start building the debug version of your app. This button basically executes ```assembleDebug``` task. However, you can run other tasks too, like, ```assembleRelease``` or ```build```.  
![Run buttons](https://raw.githubusercontent.com/itsaky/itsaky.github.io/master/_posts/images/0/run-buttons.jpg)  
1. Quick run
2. Other build related tasks

Clicking on the ```Quick run``` button will start the build process and you'll see the status bar showing ```Preparing```.  
Open the ```Build Output``` to see the output from Gradle.

Once the build is successful, AndroidIDE will automatically start an intent to install the built APK. Once the app is installed, open it and see the result.

## Limitations of AndroidIDE
Gradle's auto completion has only reserved keywords (i.e. you get only some fixed keywords and snippets as code completion). Also, XML auto completion can complete attribute names, enum values from resources included in the android.jar file and not from included libraries.

Java auto completion is much more advanced. We tested it with Java 11 syntax. However, there are still some limitations. For example, you can't automatically override inherited (abstract) methods.  

At time of writing this post, AndroidIDE is still in testing stage. All of these limitations do exist in ```v1.0.2-alpha```.
## Conclusion
I cannot say that working with AndroidIDE is so much easy. That totally depends on you. We assume that you have some basic knowledge about Gradle and it's working. If not, they have a great documentation to help you get started.

- [Gradle user guide on building Android apps](https://docs.gradle.org/current/samples/sample_building_android_apps.html)
- [Android developer guide](https://developer.android.com/guide)
