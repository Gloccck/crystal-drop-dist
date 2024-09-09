<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.4" tiledversion="1.4.2" name="chest" tilewidth="25" tileheight="22" spacing="2" margin="1" tilecount="8" columns="4">
 <image source="../../textures/chest/chest.png" width="128" height="64"/>
 <tile id="0">
  <properties>
   <property name="crystalsRequired" type="int" value="1"/>
  </properties>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="8" width="23" height="14"/>
  </objectgroup>
 </tile>
 <tile id="1">
  <animation>
   <frame tileid="1" duration="175"/>
   <frame tileid="2" duration="350"/>
   <frame tileid="3" duration="350"/>
  </animation>
 </tile>
 <tile id="4">
  <properties>
   <property name="crystalsRequired" type="int" value="2"/>
  </properties>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="8" width="23" height="14"/>
  </objectgroup>
 </tile>
 <tile id="5">
  <animation>
   <frame tileid="5" duration="175"/>
   <frame tileid="6" duration="350"/>
   <frame tileid="7" duration="350"/>
  </animation>
 </tile>
</tileset>
