package com.gablum.scheduler.proposalschedule.Controller;

import com.gablum.scheduler.proposalschedule.Model.TimerModel;
import com.gablum.scheduler.proposalschedule.Service.SchedulerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SchedulesController {
    @Autowired
    SchedulerService schedulerService;

    @GetMapping("/echo")
    public String getEcho() {
        return "schedules";
    }

    @PostMapping("/schedulejob")
    public TimerModel saveSchedules(@RequestBody TimerModel timerModel) throws Exception{
        return schedulerService.saveSchedulerDetail(timerModel);
    }
    
    @DeleteMapping("/schedulejob/{jobId}")
    public void deleteSchedule(@PathVariable("jobId") String jobId){
        schedulerService.cancelEvent(jobId);
    }

    @PatchMapping("/schedulejob")
    public TimerModel refactorSchedule(@RequestBody TimerModel updatedTimerModel){
        return schedulerService.rescheduleEvent(updatedTimerModel);
    }

    @GetMapping("/schedulejob")
    public List<TimerModel> getSchedules(){
        return schedulerService.findAllTimerDetails();
    }
    }

