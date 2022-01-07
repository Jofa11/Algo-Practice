// Code Wars 6kyu 
// Canal Management

// You work at a lock situated on a very busy canal. Boats have queued up at both sides of the lock and your managers are asking for an update on how long it's going to take for all the boats to go through the lock.

// Boats are queuing in order and they must go into the lock in that order. Multiple boats can go into the lock at the same time, however they must not exceed the length of the lock. The lock starts empty, and the timer should finish when the lock is down at empty, and all the boats are through. A boat takes its length in minutes to both enter and exit the lock, e.g. a boat of length 4 will take 4 minutes to enter and 4 minutes to leave the lock.

// Notes
// The lock takes 2 minutes to fill and empty each time
// The lock should start and finish at the low end
// No boat will ever be longer than the lock
// The time should be returned in minutes

function canalMania(lowQueue, highQueue, lockLength) {
    let total = 0;

    while (lowQueue.length || highQueue.length) {
        let boatlen = 0;
        while (lowQueue.length && boatlen + lowQueue[0] <= lockLength) boatlen += lowQueue.shift();
        total += boatlen * 2 + 2;
        boatlen = 0;
        while (highQueue.length && boatlen + highQueue[0] <= lockLength) boatlen += highQueue.shift();
        total += boatlen * 2 + 2;
    }
    return total;
}

// Not my solution. I tapped out on this one. Great solution though. I hope it helps me solve a similar challenge in the future.