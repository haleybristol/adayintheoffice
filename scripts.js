jQuery(document).ready(function() {
jQuery("#play").click(function() {
    jQuery(".play-stuff").remove();
    jQuery("#header").remove();
    jQuery('.play').css('display', 'block');
  });

  jQuery("#stuff-button").click(function() {
    jQuery(".play-stuff").remove();
    jQuery('#header').remove();
    jQuery('.projects').css('display', 'block');
  });

  jQuery("#snooze-button").click(function() {
    jQuery('.play').remove();
    jQuery(".snooze").css('display', 'block');
  });

  jQuery("#swerve-button").click(function() {
    jQuery('.snooze').remove();
    jQuery(".swerve").css('display', 'block');
  });

   jQuery("#green-games-button").click(function() {
    jQuery('.swerve').remove();
    jQuery(".green-games").css('display', 'block');
  });

  jQuery("#green-games-done").click(function() {
    jQuery('.green-games').remove();
    jQuery(".green-games-over").css('display', 'block');
    jQuery("#bball").css({
      'background-image': 'url("http://i.cdn.turner.com/drp/nba/blazers/sites/default/files/bball-giffy-v1.gif")',
      'width': '920px',
      'margin-left': '-20px',
      'margin-top': '-14px',
      'min-height': '102vh',
      'overflow': 'hidden',
      'background-size': 'cover',
      })
  });

   jQuery("#blazerdancers-button").click(function() {
    jQuery('.swerve').remove();
    jQuery(".blazerdancers").css('display', 'block');
  });

   jQuery("#blazerdancers-done").click(function() {
    jQuery('.blazerdancers').remove();
    jQuery("#bball").css('display', 'block');
    jQuery(".blazerdancers-over").css('display', 'block');
    jQuery("#bball").css({
      'background-image': 'url("http://i.cdn.turner.com/drp/nba/blazers/sites/default/files/bball-giffy-v1.gif")',
      'width': '920px',
      'margin-left': '-20px',
      'margin-top': '-14px',
      'min-height': '102vh',
      'overflow': 'hidden',
      'background-size': 'cover',
      })
  });

   jQuery("#stop-button").click(function() {
    jQuery('.snooze').remove();
    jQuery(".stop").css('display', 'block');
  });

   jQuery("#getup-button").click(function() {
    jQuery('.play').remove();
    jQuery(".getup").css('display', 'block');
  });

   jQuery("#spine-button").click(function() {
    jQuery('.getup').remove();
    jQuery(".spine").css('display', 'block');
  });

   jQuery("#wireframes-button").click(function() {
    jQuery('.wrike-spine').remove();
    jQuery(".wireframe").css('display', 'block');
  });

   jQuery("#wireframe-done").click(function() {
    jQuery('.wireframe').remove();
    jQuery(".show-wireframe").css('display', 'block');
    jQuery("#bball").css({
      'background-image': 'url("http://i.cdn.turner.com/drp/nba/blazers/sites/default/files/bball-giffy-v1.gif")',
      'width': '920px',
      'margin-left': '-20px',
      'margin-top': '-14px',
      'min-height': '102vh',
      'overflow': 'hidden',
      'background-size': 'cover',
      });
  });

   jQuery("#youth-basketball-button").click(function() {
    jQuery('.wireframe').remove();
    jQuery(".show-youth-basketball").css('display', 'block');
  });

  jQuery("#adams-button").click(function() {
    jQuery('.getup').remove();
    jQuery(".adams").css('display', 'block');
  });

  jQuery("#adam-email-button").click(function() {
    jQuery('.adams').remove();
    jQuery(".adam-email").css('display', 'block');
  });

  jQuery("#foundation-button").click(function() {
    jQuery('.adam-email').remove();
    jQuery(".foundation").css('display', 'block');
  });

  jQuery("#foundation-done-button").click(function() {
    jQuery('.foundation').remove();
    jQuery(".foundation-over").css('display', 'block');
    jQuery("#bball").css({
      'background-image': 'url("http://i.cdn.turner.com/drp/nba/blazers/sites/default/files/bball-giffy-v1.gif")',
      'width': '920px',
      'margin-left': '-20px',
      'margin-top': '-14px',
      'min-height': '102vh',
      'overflow': 'hidden',
      'background-size': 'cover',
      });
  });

  jQuery("#roster-button").click(function() {
    jQuery('.adam-email').remove();
    jQuery(".roster").css('display', 'block');
  });

  jQuery("#roster-done-button").click(function() {
    jQuery('.roster').remove();
    jQuery(".roster-over").css('display', 'block');
    jQuery("#bball").css({
      'background-image': 'url("http://i.cdn.turner.com/drp/nba/blazers/sites/default/files/bball-giffy-v1.gif")',
      'width': '920px',
      'margin-left': '-20px',
      'margin-top': '-14px',
      'min-height': '102vh',
      'overflow': 'hidden',
      'background-size': 'cover',
      });
  });

   jQuery("#wrike-adam-button").click(function() {
    jQuery('.adams').remove();
    jQuery(".adam-wrike").css('display', 'block');
  });

   jQuery("#wrike-blaze-button").click(function() {
    jQuery('.adam-wrike').remove();
    jQuery(".blaze").css('display', 'block');
  });

jQuery("#blaze-done-button").click(function() {
    jQuery('.blaze').remove();
    jQuery(".blaze-over").css('display', 'block');
    jQuery("#bball").css({
      'background-image': 'url("http://i.cdn.turner.com/drp/nba/blazers/sites/default/files/bball-giffy-v1.gif")',
      'width': '920px',
      'margin-left': '-20px',
      'margin-top': '-14px',
      'min-height': '102vh',
      'overflow': 'hidden',
      'background-size': 'cover',
      });
  });

   jQuery("#wrike-rca-button").click(function() {
    jQuery('.adam-wrike').remove();
    jQuery(".rca").css('display', 'block');
  });

   jQuery("#rca-done-button").click(function() {
    jQuery('.rca').remove();
    jQuery(".rca-over").css('display', 'block');
    jQuery("#bball").css({
      'background-image': 'url("http://i.cdn.turner.com/drp/nba/blazers/sites/default/files/bball-giffy-v1.gif")',
      'width': '920px',
      'margin-left': '-20px',
      'margin-top': '-14px',
      'min-height': '102vh',
      'overflow': 'hidden',
      'background-size': 'cover',
      });
  });

   jQuery("#email-spine-button").click(function() {
    jQuery('.spine').remove();
    jQuery(".email-spine").css('display', 'block');
  });


   jQuery("#playoffs-button").click(function() {
    jQuery('.email-spine').remove();
    jQuery(".playoffs").css('display', 'block');
  });

   jQuery("#playoffs-done-button").click(function() {
    jQuery('.playoffs').remove();
    jQuery(".playoffs-over").css('display', 'block');
    jQuery("#bball").css({
      'background-image': 'url("http://i.cdn.turner.com/drp/nba/blazers/sites/default/files/bball-giffy-v1.gif")',
      'width': '920px',
      'margin-left': '-20px',
      'margin-top': '-14px',
      'min-height': '102vh',
      'overflow': 'hidden',
      'background-size': 'cover',
      });
  });

  jQuery("#s5-button").click(function() {
    jQuery('.email-spine').remove();
    jQuery(".s5").css('display', 'block');
  });

  jQuery("#s5-done-button").click(function() {
    jQuery('.s5').remove();
    jQuery(".s5-over").css('display', 'block');
    jQuery("#bball").css({
      'background-image': 'url("http://i.cdn.turner.com/drp/nba/blazers/sites/default/files/bball-giffy-v1.gif")',
      'width': '920px',
      'margin-left': '-20px',
      'margin-top': '-14px',
      'min-height': '102vh',
      'overflow': 'hidden',
      'background-size': 'cover',
      });
  });

   jQuery("#s5-email-button").click(function() {
    jQuery('.email-spine').remove();
    jQuery(".s-email").css('display', 'block');
  });

   jQuery("#wrike-spine-button").click(function() {
    jQuery('.spine').remove();
    jQuery(".wrike-spine").css('display', 'block');
  });

   jQuery("#wireframe-button").click(function() {
    jQuery('.wrike-spine').remove();
    jQuery(".wireframe").css('display', 'block');
  });

   jQuery("#wireframe-done-button").click(function() {
    jQuery('.wireframe').remove();
    jQuery(".show-wireframe").css('display', 'block');
  });

   jQuery("#youth-basketball-button").click(function() {
    jQuery('.wrike-spine').remove();
    jQuery(".show-youth-basketball").css('display', 'block');
  });

   jQuery("#women-button").click(function() {
    jQuery('.stop').remove();
    jQuery(".women").css('display', 'block');
  });

  jQuery("#women-done-button").click(function() {
    jQuery('.women').remove();
    jQuery(".women-over").css('display', 'block');
    jQuery("#bball").css({
      'background-image': 'url("http://i.cdn.turner.com/drp/nba/blazers/sites/default/files/bball-giffy-v1.gif")',
      'width': '920px',
      'margin-left': '-20px',
      'margin-top': '-14px',
      'min-height': '102vh',
      'overflow': 'hidden',
      'background-size': 'cover',
      });
  });


  jQuery("#posters-button").click(function() {
    jQuery('.stop').remove();
    jQuery(".posters").css('display', 'block');
  });

  jQuery("#posters-done-button").click(function() {
    jQuery('.posters').remove();
    jQuery(".posters-over").css('display', 'block');
    jQuery("#bball").css({
      'background-image': 'url("http://i.cdn.turner.com/drp/nba/blazers/sites/default/files/bball-giffy-v1.gif")',
      'width': '920px',
      'margin-left': '-20px',
      'margin-top': '-14px',
      'min-height': '102vh',
      'overflow': 'hidden',
      'background-size': 'cover',
      });
  });
});