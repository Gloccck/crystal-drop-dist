<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.4" tiledversion="1.4.2" name="big_portal" tilewidth="29" tileheight="84" spacing="2" margin="1" tilecount="8" columns="8">
 <image source="../../textures/portal/big_portal.png" width="256" height="128"/>
 <tile id="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="10" width="20" height="62"/>
  </objectgroup>
  <animation>
   <frame tileid="0" duration="750"/>
   <frame tileid="1" duration="750"/>
  </animation>
 </tile>
 <tile id="2">
  <properties>
   <property name="isClosed" type="bool" value="true"/>
   <property name="isInput" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index" id="2">
   <object id="1" x="9" y="10" width="20" height="62"/>
  </objectgroup>
  <animation>
   <frame tileid="2" duration="750"/>
   <frame tileid="3" duration="750"/>
  </animation>
 </tile>
 <tile id="4">
  <properties>
   <property name="isInput" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index" id="2">
   <object id="1" x="9" y="10" width="20" height="62"/>
  </objectgroup>
  <animation>
   <frame tileid="4" duration="750"/>
   <frame tileid="5" duration="750"/>
  </animation>
 </tile>
</tileset>
