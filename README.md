# Minimal HiPS server

HiPS catalog data was generated via the hipsgen-cat.jar tool provided by Aladin:

http://aladin.u-strasbg.fr/hips/HipsCat.gml

Following the steps in example 2 on the above linked page. This server will also work with HiPS image data, however, the sample data set was almost 6GB and not suitable to host on github for this proof-of-concept.

## HiPS image data generation

Download the following jar:

http://aladin.unistra.fr/java/Hipsgen.jar

Then in the folder that you downloaded that jar to, enter the following command:

java -jar Hipsgen.jar in=http://alaskybis.u-strasbg.fr/AKARI-FIS/ColorLSN60 MIRROR

Just ensure that you change the name of the public folder in the server.js after generating this data.
