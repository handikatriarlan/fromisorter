var picSet1 = {
  Seoyeon: "ccb37ec3-6db8-4b03-0132-173626761100",
  Hyerin: "943c8c7a-f094-4aef-8bf2-b8ccb97b4300",
  Jiwoo: "040c49e0-5105-428b-c624-5e8bc04dac00",
  Chaeyeon: "e9c0d886-3bc0-4e07-db85-ee62fce04700",
  Yooyeon: "55d99d35-75f8-4016-79fb-96663d77a300",
  Soomin: "d7e5318d-e925-4c27-53d3-dff94250e800",
  Nakyoung: "f5f82ba9-d773-4dd3-0328-4b0390c46f00",
  Yubin: "f5b28934-e369-4bff-a2db-7bc0f1e60c00",
  Kaede: "101e375f-579e-41b3-1b52-6c6efc7d3700",
  Dahyun: "52ac80af-8168-4648-6abb-763e85c57000",
  Kotone: "c5ff3536-1e01-4fc0-b666-3add3ef3ce00",
  Yeonji: "abda891f-dc50-40ac-b621-00203dc4c900",
  Nien: "6310e136-c297-49d2-dd45-c2316be83900",
  Sohyun: "301e8825-7381-4b4b-2d56-75b94ed9f800",
  Xinyu: "5883625a-43cf-47aa-3e2b-bdd8c53a9700",
  Mayu: "ff8d4a9f-3129-468c-b431-ba6496cc6600",
  Lynn: "b10dd350-8038-45aa-e0a5-0db7e64eb100",
  Joobin: "34076c28-363d-4327-5804-2a1a1cb50600",
  Hayeon: "32f31adf-bbc2-4518-0580-1d906517bb00",
  Shion: "97b245b5-faba-4913-0b4a-604a27680700",
  Chaewon: "277f9523-4d83-4ee1-3acc-aea6ff2ba500",
  Sullin: "12d5c7a2-e57f-4044-4051-41ff37143300",
  Seoah: "4998f155-fcf6-4d66-ca7c-31eb7eb66f00",
  Jiyeon: "21fe55ef-5670-460c-dcc6-677c80c46f00",
};

var picSet2 = {
  Seoyeon: "e4cb57a1-542a-44bd-99fe-6b4e9ba3a900",
  Hyerin: "08c718d7-62b0-46ff-d767-bc8c4d339100",
  Jiwoo: "a7711845-ae96-4358-5d68-cf0dbbf30300",
  Chaeyeon: "2520d761-81d9-42c7-4a14-bfa2b5412c00",
  Yooyeon: "ab49b29b-cf80-47d1-2c83-e1980b16bd00",
  Soomin: "0e2d46b6-ece7-4c6c-1b82-d230a2e6ba00",
  Nakyoung: "02845852-940e-4bdb-fa02-cc06d124eb00",
  Yubin: "78db1118-fc86-4f0d-a7c3-cd5c0afe2b00",
  Kaede: "0c7b26b7-7c94-410a-01cd-a3be90ec7900",
  Dahyun: "f9df5a28-fda7-4298-1632-9012ff72d700",
  Kotone: "1fa7abfa-c1b9-4ee9-762f-4f11a5724c00",
  Yeonji: "98933bc1-330b-49a9-ed90-1b8ec2955800",
  Nien: "4c618083-9b87-4e0a-9976-f9cf8ca20300",
  Sohyun: "326e7b9d-1948-4409-2bd0-1ccbfa9a4f00",
  Xinyu: "e72b6544-ba94-44d9-7285-e7d8337fd500",
  Mayu: "0ed7fbce-455c-48f3-184d-3e3b73536900",
  Lynn: "d0f60a17-f1ed-4b79-b068-f86b2cd83000",
  Joobin: "216bedd5-8e31-4d62-ac03-b3cf03dbb300",
  Hayeon: "c2c32395-eb3b-4c83-822b-396f9435af00",
  Shion: "29299daf-6b23-49cc-d767-a09e5e694e00",
  Chaewon: "46132971-2841-4473-5034-220f165a2a00",
  Sullin: "fc85c0b3-f645-4a35-9746-abd9f9e1d400",
  Seoah: "9c46127f-37dd-4fc1-2f55-ed33582e2500",
  Jiyeon: "280eae40-6647-4316-9753-75a286ef7b00",
};

var rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
var memberPicId = [picSet1, picSet2][rand(0, 1)];

var toPicUrl = (id) =>
  `https://imagedelivery.net/qQuMkbHJ-0s6rwu8vup_5w/${id}/2x`;

var memberColor = {
  Seoyeon: "#21AEFE",
  Hyerin: "#830CE8",
  Jiwoo: "#FDF70A",
  Chaeyeon: "#98C64A",
  Yooyeon: "#DC0B74",
  Soomin: "#F985A4",
  Nakyoung: "#659AA0",
  Yubin: "#FDE4E0",
  Kaede: "#FDB634",
  Dahyun: "#FE9BD6",
  Kotone: "#E3C500",
  Yeonji: "#5974FA",
  Nien: "#FD963D",
  Sohyun: "#1223B2",
  Xinyu: "#CA1E20",
  Mayu: "#FB9074",
  Lynn: "#AC60B8",
  Joobin: "#B7F54C",
  Hayeon: "#52D8BB",
  Shion: "#FF428A",
  Chaewon: "#C3A4E0",
  Sullin: "#7DBA8D",
  Seoah: "#D0F3FF",
  Jiyeon: "#FFAB64",
};

var memberEmoji = {
  Seoyeon: "🐶",
  Hyerin: "🐱",
  Jiwoo: "🐻",
  Chaeyeon: "🦌",
  Yooyeon: "🐰",
  Soomin: "🐿️",
  Nakyoung: "🐈",
  Yubin: "🐯",
  Kaede: "🍁",
  Dahyun: "🍒",
  Kotone: "🦭",
  Yeonji: "🦆",
  Nien: "🐑",
  Sohyun: "🐺",
  Xinyu: "🦊",
  Mayu: "🐇",
  Lynn: "🦈",
  Joobin: "🐣",
  Hayeon: "🐹",
  Shion: "🍞",
  Chaewon: "🎀",
  Sullin: "⛄️",
  Seoah: "☀️",
  Jiyeon: "🦢",
};

var namMember = new Array(
  "Seoyeon",
  "Hyerin",
  "Jiwoo",
  "Chaeyeon",
  "Yooyeon",
  "Soomin",
  "Nakyoung",
  "Yubin",
  "Kaede",
  "Dahyun",
  "Kotone",
  "Yeonji",
  "Nien",
  "Sohyun",
  "Xinyu",
  "Mayu",
  "Lynn",
  "Joobin",
  "Hayeon",
  "Shion",
  "Chaewon",
  "Sullin",
  "Seoah",
  "Jiyeon",
);

var lstMember = new Array();
var parent = new Array();
var equal = new Array();
var rec = new Array();
var cmp1, cmp2;
var head1, head2;
var nrec;
var numQuestion;
var totalSize;
var finishSize;
var finishFlag;

function initList() {
  const memEmojis = Object.values(memberEmoji);
  const topEmojis = memEmojis.slice(0, 12).join(" ");
  const botEmojis = memEmojis.slice(12).join(" ");
  document.getElementById("member-emojis").innerHTML =
    `${topEmojis}<br/>${botEmojis}`;
  namMember.sort(() => 0.5 - Math.random());

  var n = 0;
  var mid;
  var i;

  lstMember[n] = new Array();

  for (i = 0; i < namMember.length; i++) {
    lstMember[n][i] = i;
  }

  parent[n] = -1;
  totalSize = 0;
  n++;

  for (i = 0; i < lstMember.length; i++) {
    if (lstMember[i].length >= 2) {
      mid = Math.ceil(lstMember[i].length / 2);
      lstMember[n] = new Array();
      lstMember[n] = lstMember[i].slice(0, mid);
      totalSize += lstMember[n].length;
      parent[n] = i;
      n++;
      lstMember[n] = new Array();
      lstMember[n] = lstMember[i].slice(mid, lstMember[i].length);
      totalSize += lstMember[n].length;
      parent[n] = i;
      n++;
    }
  }

  for (i = 0; i < namMember.length; i++) {
    rec[i] = 0;
  }

  nrec = 0;

  for (i = 0; i <= namMember.length; i++) {
    equal[i] = -1;
  }

  cmp1 = lstMember.length - 2;
  cmp2 = lstMember.length - 1;
  head1 = 0;
  head2 = 0;
  numQuestion = 1;
  finishSize = 0;
  finishFlag = 0;
}

function sortList(flag) {
  var i;
  var str;

  if (flag < 0) {
    rec[nrec] = lstMember[cmp1][head1];
    head1++;
    nrec++;
    finishSize++;

    while (equal[rec[nrec - 1]] != -1) {
      rec[nrec] = lstMember[cmp1][head1];
      head1++;
      nrec++;
      finishSize++;
    }
  } else if (flag > 0) {
    rec[nrec] = lstMember[cmp2][head2];
    head2++;
    nrec++;
    finishSize++;

    while (equal[rec[nrec - 1]] != -1) {
      rec[nrec] = lstMember[cmp2][head2];
      head2++;
      nrec++;
      finishSize++;
    }
  } else {
    rec[nrec] = lstMember[cmp1][head1];
    head1++;
    nrec++;
    finishSize++;
    while (equal[rec[nrec - 1]] != -1) {
      rec[nrec] = lstMember[cmp1][head1];
      head1++;
      nrec++;
      finishSize++;
    }
    equal[rec[nrec - 1]] = lstMember[cmp2][head2];
    rec[nrec] = lstMember[cmp2][head2];
    head2++;
    nrec++;
    finishSize++;
    while (equal[rec[nrec - 1]] != -1) {
      rec[nrec] = lstMember[cmp2][head2];
      head2++;
      nrec++;
      finishSize++;
    }
  }

  if (head1 < lstMember[cmp1].length && head2 == lstMember[cmp2].length) {
    while (head1 < lstMember[cmp1].length) {
      rec[nrec] = lstMember[cmp1][head1];
      head1++;
      nrec++;
      finishSize++;
    }
  } else if (
    head1 == lstMember[cmp1].length &&
    head2 < lstMember[cmp2].length
  ) {
    while (head2 < lstMember[cmp2].length) {
      rec[nrec] = lstMember[cmp2][head2];
      head2++;
      nrec++;
      finishSize++;
    }
  }

  if (head1 == lstMember[cmp1].length && head2 == lstMember[cmp2].length) {
    for (i = 0; i < lstMember[cmp1].length + lstMember[cmp2].length; i++) {
      lstMember[parent[cmp1]][i] = rec[i];
    }

    lstMember.pop();
    lstMember.pop();
    cmp1 = cmp1 - 2;
    cmp2 = cmp2 - 2;
    head1 = 0;
    head2 = 0;

    if (head1 == 0 && head2 == 0) {
      for (i = 0; i < namMember.length; i++) {
        rec[i] = 0;
      }
      nrec = 0;
    }
  }

  if (cmp1 < 0) {
    str =
      "Round " +
      (numQuestion - 1) +
      " (" +
      Math.floor((finishSize * 100) / totalSize) +
      "% complete)";
    document.getElementById("battleNumber").innerHTML = str;
    showResult();
    finishFlag = 1;
  } else {
    showFinal();
  }
}

function showResult() {
  var ranking = 1;
  var sameRank = 1;
  var str = "";
  var i;
  var listResult = [];

  str += "<div class='results-list'><h2>Bias Ranking Result</h2><ul>";
  for (i = 0; i < namMember.length; i++) {
    const mem = namMember[lstMember[0][i]];
    const disp = `${mem}${memberEmoji[mem]}`;
    listResult.push(disp);

    str += "<li><span class='number'>" + ranking + "</span> " + disp + "</li>";

    if (i < namMember.length - 1) {
      if (equal[lstMember[0][i]] == lstMember[0][i + 1]) {
        sameRank++;
      } else {
        ranking += sameRank;
        sameRank = 1;
      }
    }
  }

  str += "</ul>";
  document.getElementById("battleResult").innerHTML = str;
  document.getElementById("page-sorter").style.display = "none";

  const shareText = `My %23tripleS Bias Ranking:%0A${listResult.join("%0A")}%0A> https://sssorter.pages.dev`;
  const tweetBtn = document.getElementById("tweet-button");
  tweetBtn.style.display = "inline";
  tweetBtn.href = `https://twitter.com/intent/tweet?text=${shareText}`;
}

function showFinal() {
  var str0 =
    "Round " +
    numQuestion +
    " (" +
    Math.floor((finishSize * 100) / totalSize) +
    "% complete)";
  var str1 = "" + toNameFace(lstMember[cmp1][head1]);
  var str2 = "" + toNameFace(lstMember[cmp2][head2]);

  document.getElementById("battleNumber").innerHTML = str0;
  document.getElementById("optionA").innerHTML = str1;
  document.getElementById("optionB").innerHTML = str2;
  numQuestion++;
}

function toNameFace(n) {
  const mem = namMember[n];
  const disp = `<div>
  <span style='color:${memberColor[mem]};text-shadow: 1px 2px #808080;'>${mem}</span><br><span>${memberEmoji[mem] || ""}</span> 
  <img src='${toPicUrl(memberPicId[mem])}' style='max-height:100%;max-width:100%'/>
</div>`;

  return disp;
}
