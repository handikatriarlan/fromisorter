var picSet1 = {
  Saerom: "https://ucarecdn.com/28d4cf05-ac67-43a3-95dc-aa7f245ac99e/lsr1.jpg",
  Hayoung: "https://ucarecdn.com/f849f0a2-4d15-41ea-b3f8-a9cab10f9ee1/shy1.jpg",
  Jiwon: "https://ucarecdn.com/047fd630-be01-4ec1-9729-5843baffe96c/pjw1.jpg",
  Jisun: "https://ucarecdn.com/7083cd73-033b-4718-96ad-584585ffa97c/rjs1.jpg",
  Seoyeon: "https://ucarecdn.com/263829bb-eec6-4589-9944-a699088b5d60/lsy1.jpg",
  Chaeyoung: "https://ucarecdn.com/c67bf78c-c293-471e-8363-bfb22c505aba/lcy1.jpg",
  Nagyung: "https://ucarecdn.com/d2e52b93-05c0-418b-8f3a-4aecb1216794/lng1.jpg",
  Jiheon: "https://ucarecdn.com/9d92a474-e5e3-43bd-b70a-32431f261c04/bjh1.jpg",
};

var picSet2 = {
  Saerom: "https://ucarecdn.com/71a4f7b8-6491-4527-9392-0ef20edbc1b2/lsr2.jpg",
  Hayoung: "https://ucarecdn.com/d701a368-ead0-4629-a239-28309012d509/shy2.jpg",
  Jiwon: "https://ucarecdn.com/01359fe1-0b02-4d92-8d7d-c9fca6863287/pjw2.jpg",
  Jisun: "https://ucarecdn.com/2c0c7593-d7be-491b-83be-4be5373172b1/rjs2.jpg",
  Seoyeon: "https://ucarecdn.com/a898d73c-fb8f-4bab-be57-f3e9fe53ea0d/lsy2.jpg",
  Chaeyoung: "https://ucarecdn.com/5bef63c9-a723-4777-bd7e-ff7df2f06758/lcy2.jpg",
  Nagyung: "https://ucarecdn.com/05a438d3-ce90-4754-b010-60550e90f299/lng2.jpg",
  Jiheon: "https://ucarecdn.com/9b8267fa-c2e3-4083-93eb-e5372a996732/bjh2.jpg",
};

var rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
var memberPicId = [picSet1, picSet2][rand(0, 1)];

var memberColor = {
  Saerom: "#50C878",
  Hayoung: "#4169E1",
  Jiwon: "#DC143C",
  Jisun: "#FFD700",
  Seoyeon: "#008080",
  Chaeyoung: "#FFA500",
  Nagyung: "#FF69B4",
  Jiheon: "#8A2BE2",
};

var memberEmoji = {
  Saerom: "🦊",
  Hayoung: "🍞",
  Jiwon: "🐰",
  Jisun: "🐑",
  Seoyeon: "🐼",
  Chaeyoung: "🐿️",
  Nagyung: "🐣",
  Jiheon: "🍯"
};

var namMember = new Array(
  "Saerom",
  "Hayoung",
  "Jiwon",
  "Jisun",
  "Seoyeon",
  "Chaeyoung",
  "Nagyung",
  "Jiheon"
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

    const paddedRank = ranking.toString().padStart(1);

    str += "<li><span class='number'>" + paddedRank + "</span> " + disp + "</li>";

    if (i < namMember.length - 1) {
      if (equal[lstMember[0][i]] == lstMember[0][i + 1]) {
        sameRank++;
      } else {
        ranking += sameRank;
        sameRank = 1;
      }
    }
    listResult.push(`${paddedRank}. ${disp}`);
  }

  str += "</ul>";
  document.getElementById("battleResult").innerHTML = str;
  document.getElementById("page-sorter").style.display = "none";

  const shareText = `My %23fromis_9 Bias Ranking:%0A${listResult.join("%0A")}%0A> fromisorter.pages.dev`;
  const tweetBtn = document.getElementById("tweet-button");
  tweetBtn.style.display = "inline";
  tweetBtn.href = `https://twitter.com/intent/tweet?text=${shareText}`;

  const resetBtn = document.getElementById("reset-button");
  resetBtn.style.display = "inline";

  resetBtn.addEventListener('click', function () {
    location.reload();
  });

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
  const disp = `<div class="member-name">
  <span style='color:${memberColor[mem]}; margin-bottom: 10px; display: inline-block;'>${mem}${memberEmoji[mem] || ""}</span>
  <img src='${memberPicId[mem]}' style='max-height:100%;max-width:100%'/>
</div>`;

  return disp;
}
