var app = angular.module('PomodoroApp', []);
app.controller('MainCtrl', function($scope, $interval) {
    $scope.breakLength = 5;
    $scope.sessionLength = 25;
    $scope.timeLeft = $scope.sessionLength;
    $scope.fillHeight = '0%';
    $scope.sessionName = '工作中...';
    // $scope.currentTotal;

    var runTimer = false;
    var secs = 60 * $scope.timeLeft;
    $scope.originalTime = $scope.sessionLength;

    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        return (
            (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s
        );
    }

    // Change default session length
    $scope.sessionLengthChange = function(time) {
        if (!runTimer) {
            if ($scope.sessionName === '工作中...') {
                $scope.sessionLength += time;
                if ($scope.sessionLength < 1) {
                    $scope.sessionLength = 1;
                }
                $scope.timeLeft = $scope.sessionLength;
                $scope.originalTime = $scope.sessionLength;
                secs = 60 * $scope.sessionLength;
            }
        }
    };

    // Change default break length
    $scope.breakLengthChange = function(time) {
        if (!runTimer) {
            $scope.breakLength += time;
            if ($scope.breakLength < 1) {
                $scope.breakLength = 1;
            }
            if ($scope.sessionName === '休息中 zZ') {
                $scope.timeLeft = $scope.breakLength;
                $scope.originalTime = $scope.breakLength;
                secs = 60 * $scope.breakLength;
            }
        }
    };

    $scope.toggleTimer = function() {
        if (!runTimer) {
            if ($scope.currentName === '工作中...') {
                $scope.currentLength = $scope.sessionLength;
            } else {
                $scope.currentLength = $scope.breakLength;
            }

            updateTimer();
            runTimer = $interval(updateTimer, 1000);
        } else {
            $interval.cancel(runTimer);
            runTimer = false;
        }
    };

    function updateTimer() {
        secs -= 1;
        if (secs < 0) {
            // countdown is finished

            // Play audio
            var wav = 'notfication.wav';
            var audio = new Audio(wav);
            audio.play();

            // toggle break and session
            $scope.fillColor = '#333';
            if ($scope.sessionName === '休息中 zZ') {
                $scope.sessionName = '工作中...';
                $scope.currentLength = $scope.sessionLength;
                $scope.timeLeft = 60 * $scope.sessionLength;
                $scope.originalTime = $scope.sessionLength;
                secs = 60 * $scope.sessionLength;
            } else {
                $scope.sessionName = '休息中 zZ';
                $scope.currentLength = $scope.breakLength;
                $scope.timeLeft = 60 * $scope.breakLength;
                $scope.originalTime = $scope.breakLength;
                secs = 60 * $scope.breakLength;
            }
        } else {
            if ($scope.sessionName === '休息中 zZ') {
                $scope.fillColor = '#f44';
            } else {
                $scope.fillColor = '#00af6c';
            }
            $scope.timeLeft = secondsToHms(secs);

            var denom = 60 * $scope.originalTime;
            var perc = Math.abs((secs / denom) * 100 - 100);
            $scope.fillHeight = perc + '%';
        }
    }

});
